import React, { useState } from "react"
import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	TextField,
	DialogActions,
	ThemeProvider,
} from "@material-ui/core"

import Node from "@/utils/node"

import theme from "@/styles/theme"

import logoImage from "@/assets/logo-320.png"

import useStyles from "@/components/LoginDialog/styles"

type LoginDialogResponse = {
	name: string
}

type LoginDialogType = {
	open: () => Promise<LoginDialogResponse>
}

type LoginDialogProps = {
	callback: (response: LoginDialogResponse) => void
}

const LoginDialog: LoginDialogType & React.FC<LoginDialogProps> = (props) => {
	const { callback } = props

	const [dialogVisible, setDialogVisible] = useState(true)
	const [response, setResponse] = useState<LoginDialogResponse>({ name: "" })

	const classes = useStyles()

	const handleConfirm = () => {
		if (!response.name) {
			return
		}

		setDialogVisible(false)

		callback(response)
	}

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()

		handleConfirm()
	}

	const handleChange = (key: keyof LoginDialogResponse, value: LoginDialogResponse[keyof LoginDialogResponse]) => {
		setResponse(lastState => ({
			...lastState,
			[key]: value,
		}))
	}

	return (
		<ThemeProvider theme={theme}>
			<Dialog
				open={dialogVisible}
				style={{
					zIndex: 999999,
				}}
			>
				<form
					onSubmit={handleSubmit}
					className={classes.form}
				>
					<DialogTitle>登录</DialogTitle>

					<img
						src={logoImage}
						alt="logo"
						className={classes.logo}
					/>

					<DialogContent>
						<DialogContentText color="textPrimary">
							请输入用户名来开始游戏。
						</DialogContentText>
						<TextField
							autoFocus
							required
							margin="dense"
							label="用户名"
							value={response.name}
							onChange={({ target }) => handleChange("name", target.value)}
							fullWidth
						/>
					</DialogContent>
					<DialogActions>
						<Button
							onClick={handleConfirm}
							variant="contained"
							color="primary"
							type="submit"
						>
							确认
						</Button>
					</DialogActions>
				</form>
			</Dialog>
		</ThemeProvider>
	)
}

LoginDialog.open = async (): Promise<LoginDialogResponse> => new Promise(resolve => Node.renderComponent(
	"login-dialog",
	<LoginDialog
		callback={resolve}
	/>,
))

export default LoginDialog
