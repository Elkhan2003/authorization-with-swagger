import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormSignIn {
	email: string;
	password: string;
}

const LoginPage = () => {
	const { register, handleSubmit } = useForm<IFormSignIn>();

	const onSubmit: SubmitHandler<IFormSignIn> = async (data) => {
		console.log(data);
	};

	return (
		<>
			<div>
				<h3>LoginPage</h3>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						placeholder="email"
						type="text"
						{...register('email', { required: true })}
					/>
					<input
						placeholder="password"
						type="password"
						{...register('password', { required: true })}
					/>
					<button type="submit">Вход</button>
				</form>
			</div>
		</>
	);
};
export default LoginPage;
