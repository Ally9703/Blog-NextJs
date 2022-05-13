// Librairies
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { connectToDatabase } from '../../../helpers/mongodb';
import { verifyPassword } from '../../../helpers/auth';

export default NextAuth({
	providers: [
		Providers.Credentials({
			async authorize(credentials) {
				const { email, password } = credentials;

				// Connexion à MongoDB
				const clientMongoDB = await connectToDatabase();

				// 1ère étape : l'utilisateur existe-t-il ?
				const utilisateur = await clientMongoDB
					.db()
					.collection('utilisateurs')
					.findOne({ email: email });

				if (!utilisateur) {
					clientMongoDB.close();
					throw new Error(
						'Impossible de vous authentifier.',
					);
				}

				// 2ème étape : le mot de passe est-il correct avec celui enregistré ?
				const isValid = await verifyPassword(
					password,
					utilisateur.password,
				);

				if (!isValid) {
					clientMongoDB.close();
					throw new Error(
						'Impossible de vous authentifier.',
					);
				}

				// Succès
				clientMongoDB.close();
				return {
					email: utilisateur.email,
					name: utilisateur.pseudo,
					id: utilisateur._id,
					roles: utilisateur.roles,
				};
			},
		}),
	],
	callbacks: {
		jwt: async (token, user) => {
			user && (token.user = user);
			return token;
		},
		session: async (session, user) => {
			session.user = user.user;
			return session;
		},
	},
});
