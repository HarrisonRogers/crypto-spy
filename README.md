# 🕵️‍♂️ Crypto Spy - Chrome Extension

**Crypto Spy** is a Chrome extension built with Vite that allows users to track cryptocurrency prices using the CoinGecko API.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/crypto-spy.git
cd crypto-spy
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory and add your [CoinGecko API Key](https://www.coingecko.com/en/api):

```env
VITE_COIN_GECKO_API_KEY=[YOUR_API_KEY]
```

---

## 🛠 Building the Extension

To build the project and update the `build/` folder:

```bash
npm run build
```

This will generate the production-ready files in the `build/` directory.

---

## 🧪 Testing the Extension Locally

1. Open **Chrome** and navigate to:  
   `chrome://extensions/`

2. Enable **Developer mode** (top right corner).

3. Click **Load unpacked** (top left corner).

4. Select your **zipped `build/` folder**.  
   _Note: You must compress the `build/` folder into a `.zip` before selecting it._

5. The extension should now appear and be ready to use.

---

## 🧹 Git Commit Linting

This project uses [Git Commit Msg Linter](https://github.com/legend80s/git-commit-msg-linter#readme) for commit message formatting.

Please follow commit guidelines when contributing.

---

## 🔒 Contribution Rules

- **Do not push directly to `main`.**
- Always create a **Pull Request (PR)** unless you have explicit permission to push.
- Follow coding and commit standards for all contributions.

---

## 📄 License

MIT © [Your Name]

---

## 🙏 Acknowledgements

- [CoinGecko API](https://www.coingecko.com/en/api)
- [Vite](https://vitejs.dev/)
