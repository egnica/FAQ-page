import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	base: "https://www.barlowresearch.com/BusinessBankingConference_2024/faq",
	plugins: [react()],
});
