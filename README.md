<p align="center">
	<img src="./assets/uno_icon.png" width="200" alt="icon example" />
</p>	

<h3 align="center">
  使用 Javascript 编写的 UNO Game 🎴
</h3>

<p align="center">
（中文版|Chinese version）
</p>

<p align="center">
	<a href="https://lerna.js.org/">
		<img alt="lerna" src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" alt="通过 lerna 维护"/>
	</a>
	<a href="https://github.com/microsoft/TypeScript">
		<img alt="typescript" src="https://img.shields.io/badge/typescript-3178c6?logo=typescript&logoColor=fff">
	</a>
	<a href="https://github.com/summonhim/uno-game">
		<img alt="mit license" src="https://img.shields.io/github/license/summonhim/uno-game?color=0051ff" />
	</a>
</p>
<p align="center">
	<a href="https://github.com/summonhim/uno-game">
		<img alt="unoenty build" src="https://github.com/summonhim/uno-game/workflows/Unoenty%20CI/badge.svg" />
	</a>
	<a href="https://github.com/summonhim/uno-game">
		<img alt="unapy build" src="https://github.com/summonhim/uno-game/workflows/Unapy%20CI/badge.svg" />
	</a>
</p>

<p align="center">
	<img src="./assets/main_preview.gif" alt="mockup" />
	<br></br>
	<!-- <a href="https://uno.guilherr.me">Click here to play this game</a> -->
</p>

## 📌 概览

使用 Javascript 编写的简易 UNO Game。应该能比 Gartic 更容易，更快速的开始游戏。

## 🔧 技术

- Typescript
- React.js
- Socket.io
- Lerna
- Express
- Material UI
- Husky
- Lint Staged
- Git Commit Message Linter
- ESLint
- React DnD
- MsgPackParser

## 🚀 运行

### 运行 API

```yaml
services:
  redis:
    image: redis
    command: --save 60 1 --loglevel warning
    restart: unless-stopped
    healthcheck:
      test: ["CMD-SHELL", "redis-cli ping | grep PONG"]
      start_period: 20s
      interval: 30s
      retries: 5
      timeout: 3s
    volumes:
      - ./data/redis:/data

  unapy:
    image: ghcr.io/summonhim/uno-game-chs:v1.0.0.rc1
    restart: unless-stopped
    environment:
      - REDIS_HOST=redis
      - REDIS_PORT=6379
      - STATIC_FILES_BASE_URL=https://unapy.n100.serenity.summonhim.top:8443/assets
    # ports:
    #   - 25000:80
    depends_on:
      redis:
        condition: service_healthy
```

### 搭建客户端

1. 克隆本仓库
2. 切换 nodejs 版本为 12.x
3. 运行该命令来安装项目依赖：`npm run setup`
4. 新建/编辑 [packages/unoenty/.env](packages/unoenty/.env)，可参照 [packages/unoenty/.env.example](packages/unoenty/.env.example) 将 `REACT_APP_API_URL` 设置为你的 API 地址。
5. 运行 `npm run build:unoenty` 来编译项目，编译完成后将 [packages/unoenty/build](packages/unoenty/build) 复制到你的网页服务器即可。

## 🛠️ 测试

1. 克隆本仓库
2. 执行以下代码
```sh
# 安装所有共享依赖
# 为 API 安装依赖
# 为客户端安装依赖
# 为所有包关联依赖
# 为 API 添加环境文件
# 为客户端添加环境文件
npm run setup
```

3. 在项目根目录中运行该命令来运行所有的必要资源（类如 Redis）。
```sh
npm run dev:resources
```

3. 在 **packages/unoenty** 和 **packages/unapy** 目录下分别运行以下命令来开启 API 和客户端。
```sh
npm run dev
```

现在服务应该会正常运行，所以，**API** 会运行在 **http://localhost:5000** ，然后 **客户端** 会运行在 **http://localhost:4000** 。

## 👏 贡献

1. 克隆本仓库到你的电脑。
2. 在本地创建一个新分支，格式需为 **Git Karma** 格式。类如：feat/xin-gong-neng。
3. 编写完需要贡献的代码后。为该分支发起新合并请求。

## 🗺️ 路线图

由于我们希望不断改进这款游戏，可在我们的[**路线图**](https://github.com/guilhermebkel/uno-game/projects/1)上查看下一步计划。欢迎提出任何改进建议或错误修复意见！

## 💫 贡献者

感谢以下人士为此项目做出的贡献！

<table>
  <tr>
    <td align="center">
			<a
				href="https://github.com/ArcaneDiver" 
				title="ArcaneDiver"
			>
				<img src="https://avatars.githubusercontent.com/ArcaneDiver" width="100px;" alt=""/>
				<br />
				<sub>
					<b>Michele Della Mea</b>
				</sub>
			</a>
		</td>
		<td align="center">
			<a
				href="https://github.com/lcscout" 
				title="lcscout"
			>
				<img src="https://avatars.githubusercontent.com/lcscout" width="100px;" alt=""/>
				<br />
				<sub>
					<b>Lucas Coutinho de Oliveira</b>
				</sub>
			</a>
		</td>
  </tr>
</table>

## 📖 译者/Translator

[SummonHIM](https://github.com/SummonHIM)