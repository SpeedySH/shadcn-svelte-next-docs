#!/usr/bin/env node
import process from "node:process";
import { Command } from "commander";
import * as commands from "./commands/index.js";
import { getCLIPackageInfo } from "./utils/get-package-info.js";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

const currentVersion = process.versions.node;
const currentMajorVersion = Number.parseInt(currentVersion.split(".")[0]!, 10);
const minimumMajorVersion = 18;

if (currentMajorVersion < minimumMajorVersion) {
	console.error(`Node.js v${currentVersion} is out of date and unsupported!`);
	console.error(`Please use Node.js v${minimumMajorVersion} or higher.`);
	process.exit(1);
}

async function main() {
	console.clear();

	const packageInfo = getCLIPackageInfo();

	const program = new Command()
		.name("shadcn-svelte")
		.description("Add shadcn-svelte components to your project")
		.version(packageInfo.version || "0.0.0", "-v, --version", "display the version number");

	// register commands
	for (const cmd of Object.values(commands)) {
		program.addCommand(cmd);
	}

	program.parse();
}

main();
