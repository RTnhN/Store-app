import React from "react";
import '../../../Styles/Footer.css';

function Footer(props) {
  return (
    <footer>
      <a href="https://github.com/RTnhN/store-app">Made with {randomEmoji(emoji)} in {randomEmoji(flags)} (not really) </a>
    </footer>
  )
}

export default Footer;

function randomEmoji(array){
  return array[Math.floor(Math.random()*array.length)];
}


const emoji = [
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🦊",
  "🐻",
  "🐼",
  "🐻‍❄️",
  "🐨",
  "🐯",
  "🦁",
  "🐮",
  "🐷",
  "🐽",
  "🐸",
  "🐵",
  "🙈",
  "🙉",
  "🙊",
  "🐒",
  "🐔",
  "🐧",
  "🐦",
  "🐤",
  "🐣",
  "🐥",
  "🦆",
  "🦅",
  "🦉",
  "🦇",
  "🐺",
  "🐗",
  "🐴",
  "🦄",
  "🐝",
  "🪱",
  "🐛",
  "🦋",
  "🐌",
  "🐞",
  "🐜",
  "🪰",
  "🪲",
  "🪳",
  "🦟",
  "🦗",
  "🕷",
  "🕸",
  "🦂",
  "🐢",
  "🐍",
  "🦎",
  "🦖",
  "🦕",
  "🐙",
  "🦑",
  "🦐",
  "🦞",
  "🦀",
  "🐡",
  "🐠",
  "🐟",
  "🐬",
  "🐳",
  "🐋",
  "🦈",
  "🐊",
  "🐅",
  "🐆",
  "🦓",
  "🦍",
  "🦧",
  "🦣",
  "🐘",
  "🦛",
  "🦏",
  "🐪",
  "🐫",
  "🦒",
  "🦘",
  "🦬",
  "🐃",
  "🐂",
  "🐄",
  "🐎",
  "🐖",
  "🐏",
  "🐑",
  "🦙",
  "🐐",
  "🦌",
  "🐕",
  "🐩",
  "🦮",
  "🐕‍🦺",
  "🐈",
  "🐈‍⬛",
  "🪶",
  "🐓",
  "🦃",
  "🦤",
  "🦚",
  "🦜",
  "🦢",
  "🦩",
  "🕊",
  "🐇",
  "🦝",
  "🦨",
  "🦡",
  "🦫",
  "🦦",
  "🦥",
  "🐁",
  "🐀",
  "🐿",
  "🦔",
  "🐾",
  "🐉",
  "🐲",
  "🌵",
  "🎄",
  "🌲",
  "🌳",
  "🌴",
  "🪵",
  "🌱",
  "🌿",
  "☘️",
  "🍀",
  "🎍",
  "🪴",
  "🎋",
  "🍃",
  "🍂",
  "🍁",
  "🍄",
  "🐚",
  "🪨",
  "🌾",
  "💐",
  "🌷",
  "🌹",
  "🥀",
  "🌺",
  "🌸",
  "🌼",
  "🌻",
  "🌞",
  "🌝",
  "🌛",
  "🌜",
  "🌚",
  "🌕",
  "🌖",
  "🌗",
  "🌘",
  "🌑",
  "🌒",
  "🌓",
  "🌔",
  "🌙",
  "🌎",
  "🌍",
  "🌏",
  "🪐",
  "💫",
  "⭐️",
  "🌟",
  "✨",
  "⚡️",
  "☄️",
  "💥",
  "🔥",
  "🌪",
  "🌈",
  "☀️",
  "🌤",
  "⛅️",
  "🌥",
  "☁️",
  "🌦",
  "🌧",
  "⛈",
  "🌩",
  "🌨",
  "❄️",
  "☃️",
  "⛄️",
  "🌬",
  "💨",
  "💧",
  "💦",
  "☔️",
  "☂️",
  "🌊",
  "🌫",
  "🍏",
  "🍎",
  "🍐",
  "🍊",
  "🍋",
  "🍌",
  "🍉",
  "🍇",
  "🍓",
  "🫐",
  "🍈",
  "🍒",
  "🍑",
  "🥭",
  "🍍",
  "🥥",
  "🥝",
  "🍅",
  "🍆",
  "🥑",
  "🥦",
  "🥬",
  "🥒",
  "🌶",
  "🫑",
  "🌽",
  "🥕",
  "🫒",
  "🧄",
  "🧅",
  "🥔",
  "🍠",
  "🥐",
  "🥯",
  "🍞",
  "🥖",
  "🥨",
  "🧀",
  "🥚",
  "🍳",
  "🧈",
  "🥞",
  "🧇",
  "🥓",
  "🥩",
  "🍗",
  "🍖",
  "🦴",
  "🌭",
  "🍔",
  "🍟",
  "🍕",
  "🫓",
  "🥪",
  "🥙",
  "🧆",
  "🌮",
  "🌯",
  "🫔",
  "🥗",
  "🥘",
  "🫕",
  "🥫",
  "🍝",
  "🍜",
  "🍲",
  "🍛",
  "🍣",
  "🍱",
  "🥟",
  "🦪",
  "🍤",
  "🍙",
  "🍚",
  "🍘",
  "🍥",
  "🥠",
  "🥮",
  "🍢",
  "🍡",
  "🍧",
  "🍨",
  "🍦",
  "🥧",
  "🧁",
  "🍰",
  "🎂",
  "🍮",
  "🍭",
  "🍬",
  "🍫",
  "🍿",
  "🍩",
  "🍪",
  "🌰",
  "🥜",
  "🍯",
  "🥛",
  "🍼",
  "🫖",
  "☕️",
  "🍵",
  "🧃",
  "🥤",
  "🧋",
  "🍶",
  "🍺",
  "🍻",
  "🥂",
  "🍷",
  "🥃",
  "🍸",
  "🍹",
  "🧉",
  "🍾",
  "🧊",
  "🥄",
  "🍴",
  "🍽",
  "🥣",
  "🥡",
  "🥢",
  "🧂",
  "🧳",
  "🌂",
  "☂️",
  "🧵",
  "🪡",
  "🪢",
  "🧶",
  "👓",
  "🕶",
  "🥽",
  "🥼",
  "🦺",
  "👔",
  "👕",
  "👖",
  "🧣",
  "🧤",
  "🧥",
  "🧦",
  "👗",
  "👘",
  "🥻",
  "🩴",
  "🩳",
  "👚",
  "👛",
  "👜",
  "👝",
  "🎒",
  "👞",
  "👟",
  "🥾",
  "🥿",
  "👠",
  "👡",
  "🩰",
  "👢",
  "👑",
  "👒",
  "🎩",
  "🎓",
  "🧢",
  "⛑",
  "🪖",
  "💄",
  "💍",
  "💼"
]

const flags = [
  "🏴‍☠️",
"🇦🇫",
"🇦🇽",
"🇦🇱",
"🇩🇿",
"🇦🇸",
"🇦🇩",
"🇦🇴",
"🇦🇮",
"🇦🇶",
"🇦🇬",
"🇦🇷",
"🇦🇲",
"🇦🇼",
"🇦🇺",
"🇦🇹",
"🇦🇿",
"🇧🇸",
"🇧🇭",
"🇧🇩",
"🇧🇧",
"🇧🇾",
"🇧🇪",
"🇧🇿",
"🇧🇯",
"🇧🇲",
"🇧🇹",
"🇧🇴",
"🇧🇦",
"🇧🇼",
"🇧🇷",
"🇮🇴",
"🇻🇬",
"🇧🇳",
"🇧🇬",
"🇧🇫",
"🇧🇮",
"🇰🇭",
"🇨🇲",
"🇨🇦",
"🇮🇨",
"🇨🇻",
"🇧🇶",
"🇰🇾",
"🇨🇫",
"🇹🇩",
"🇨🇱",
"🇨🇳",
"🇨🇽",
"🇨🇨",
"🇨🇴",
"🇰🇲",
"🇨🇬",
"🇨🇩",
"🇨🇰",
"🇨🇷",
"🇨🇮",
"🇭🇷",
"🇨🇺",
"🇨🇼",
"🇨🇾",
"🇨🇿",
"🇩🇰",
"🇩🇯",
"🇩🇲",
"🇩🇴",
"🇪🇨",
"🇪🇬",
"🇸🇻",
"🇬🇶",
"🇪🇷",
"🇪🇪",
"🇪🇹",
"🇪🇺",
"🇫🇰",
"🇫🇴",
"🇫🇯",
"🇫🇮",
"🇫🇷",
"🇬🇫",
"🇵🇫",
"🇹🇫",
"🇬🇦",
"🇬🇲",
"🇬🇪",
"🇩🇪",
"🇬🇭",
"🇬🇮",
"🇬🇷",
"🇬🇱",
"🇬🇩",
"🇬🇵",
"🇬🇺",
"🇬🇹",
"🇬🇬",
"🇬🇳",
"🇬🇼",
"🇬🇾",
"🇭🇹",
"🇭🇳",
"🇭🇰",
"🇭🇺",
"🇮🇸",
"🇮🇳",
"🇮🇩",
"🇮🇷",
"🇮🇶",
"🇮🇪",
"🇮🇲",
"🇮🇱",
"🇮🇹",
"🇯🇲",
"🇯🇵",
"🎌",
"🇯🇪",
"🇯🇴",
"🇰🇿",
"🇰🇪",
"🇰🇮",
"🇽🇰",
"🇰🇼",
"🇰🇬",
"🇱🇦",
"🇱🇻",
"🇱🇧",
"🇱🇸",
"🇱🇷",
"🇱🇾",
"🇱🇮",
"🇱🇹",
"🇱🇺",
"🇲🇴",
"🇲🇰",
"🇲🇬",
"🇲🇼",
"🇲🇾",
"🇲🇻",
"🇲🇱",
"🇲🇹",
"🇲🇭",
"🇲🇶",
"🇲🇷",
"🇲🇺",
"🇾🇹",
"🇲🇽",
"🇫🇲",
"🇲🇩",
"🇲🇨",
"🇲🇳",
"🇲🇪",
"🇲🇸",
"🇲🇦",
"🇲🇿",
"🇲🇲",
"🇳🇦",
"🇳🇷",
"🇳🇵",
"🇳🇱",
"🇳🇨",
"🇳🇿",
"🇳🇮",
"🇳🇪",
"🇳🇬",
"🇳🇺",
"🇳🇫",
"🇰🇵",
"🇲🇵",
"🇳🇴",
"🇴🇲",
"🇵🇰",
"🇵🇼",
"🇵🇸",
"🇵🇦",
"🇵🇬",
"🇵🇾",
"🇵🇪",
"🇵🇭",
"🇵🇳",
"🇵🇱",
"🇵🇹",
"🇵🇷",
"🇶🇦",
"🇷🇪",
"🇷🇴",
"🇷🇺",
"🇷🇼",
"🇼🇸",
"🇸🇲",
"🇸🇦",
"🇸🇳",
"🇷🇸",
"🇸🇨",
"🇸🇱",
"🇸🇬",
"🇸🇽",
"🇸🇰",
"🇸🇮",
"🇬🇸",
"🇸🇧",
"🇸🇴",
"🇿🇦",
"🇰🇷",
"🇸🇸",
"🇪🇸",
"🇱🇰",
"🇧🇱",
"🇸🇭",
"🇰🇳",
"🇱🇨",
"🇵🇲",
"🇻🇨",
"🇸🇩",
"🇸🇷",
"🇸🇿",
"🇸🇪",
"🇨🇭",
"🇸🇾",
"🇹🇼",
"🇹🇯",
"🇹🇿",
"🇹🇭",
"🇹🇱",
"🇹🇬",
"🇹🇰",
"🇹🇴",
"🇹🇹",
"🇹🇳",
"🇹🇷",
"🇹🇲",
"🇹🇨",
"🇹🇻",
"🇻🇮",
"🇺🇬",
"🇺🇦",
"🇦🇪",
"🇬🇧",
"🏴󠁧󠁢󠁥󠁮󠁧󠁿",
"🏴󠁧󠁢󠁳󠁣󠁴󠁿",
"🏴󠁧󠁢󠁷󠁬󠁳󠁿",
"🇺🇳",
"🇺🇸",
"🇺🇾",
"🇺🇿",
"🇻🇺",
"🇻🇦",
"🇻🇪",
"🇻🇳",
"🇼🇫",
"🇪🇭",
"🇾🇪",
"🇿🇲",
"🇿🇼"
]