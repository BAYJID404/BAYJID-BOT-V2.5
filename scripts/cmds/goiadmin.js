module.exports = {
	config: {
		name: "goiadmin",
		author: "𝗔𝗺𝗶𝗻𝘂𝗹 𝗦𝗼𝗿𝗱𝗮𝗿/𝐁𝐀𝐘𝐉𝐈𝐃-৬T৯",
		role: 0,
		shortDescription: " ",
		longDescription: "",
		category: "BOT",
		guide: "{pn}"
	},

onChat: function({ api, event }) {
	if (event.senderID !== "100005193854879") {
		var aid = ["100005193854879"];
		for (const id of aid) {
		if ( Object.keys(event.mentions) == id) {
			var msg = ["❁𝗕𝗔𝗬𝗝𝗜𝗗𖣘 বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","এতো মিনশন নাহ দিয়া সিংগেল ❁𝗕𝗔𝗬𝗝𝗜𝗗𖣘 রে একটা গফ দে 😒 😏","Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স","মেনশন দিসনা পারলে একটা গফ দে","Mantion_দিস না বাঁলপাঁক্না ❁𝗕𝗔𝗬𝗝𝗜𝗗𖣘 প্রচুর বিজি 🥵🥀🤐"];
			return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
		}
		}}
},
onStart: async function({}) {
	}
};