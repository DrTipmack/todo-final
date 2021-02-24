import React from 'react';
import Amplify from 'aws-amplify';
import "../style/signIn.css";
import { AmplifyAuthenticator, AmplifySignOut, AmplifySignUp, AmplifySignIn } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../aws-exports.js';

Amplify.configure(awsconfig);

const Auth = (props) => {
	const [authState, setAuthState] = React.useState();
	const setUser = props.setUser;

	React.useEffect(() => {
		onAuthUIStateChange((nextAuthState, authData) => {
			setAuthState(nextAuthState);
			setUser(authData)
		});
	}, []);
	return (
		<AmplifyAuthenticator usernameAlias="email">
			<AmplifySignUp
				slot="sign-up"
				usernameAlias="email"
				formFields={[
					{
						type: "email",
						label: "Your email pls 😉",
						placeholder: "block@block101.co.uk",
						required: true,
					},
					{
						type: "name",
						label: "Your first name pls 🤗",
						placeholder: "Block",
						required: true
					},
					{
						type: "password",
						label: "Password here 🕵️‍♂️",
						placeholder: "Look over your shoulder, just in case",
						required: true,
					}]}
			/>
			<AmplifySignIn slot="sign-in" usernameAlias="email" />
		</AmplifyAuthenticator>
	);
}

export default Auth;