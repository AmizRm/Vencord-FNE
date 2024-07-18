/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors*
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import definePlugin from "../utils/types";
import { Devs } from "../utils/constants";

async function getcutefems(): Promise<string> {
    const res = await fetch('https://api.waifu.pics/nsfw/trap');
    const url = (await res.json()).url as string;
    return url;
}



export default definePlugin({
    name: "Cute Femboy Pics",
    description: "Uhmmm",
    dependencies: ["CommandsAPI"],
    authors: [Devs.amizr],
    commands: [{
        name: "fem",
        description: "AAAAAAAAAAAAAAAAAAAAAA",

        execute: async opts => ({
            content: await getcutefems()
        })
    }]
});
