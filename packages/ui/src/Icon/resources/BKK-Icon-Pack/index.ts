import './index.css'
import {addMissing, createResource} from "../../resource.ts";

const map = new Map<string, string>;

map.set("bicycle", "\ue900")
map.set("bicycle-solid", "\ue901")
map.set("word", "\ue902")
map.set("word-solid", "\ue903")
map.set("facebook", "\ue904")
map.set("facebook-solid", "\ue905")
map.set("paper", "\ue906")
map.set("paper-solid", "\ue907")
map.set("instagram", "\ue908")
map.set("instagram-solid", "\ue909")
map.set("pdf", "\ue90a")
map.set("pdf-solid", "\ue90b")
map.set("plane", "\ue90c")
map.set("plane-solid", "\ue90d")
map.set("arrows", "\ue90e")
map.set("arrows-solid", "\ue90f")
map.set("hamburger-menu-icon", "\ue910")
map.set("excel", "\ue911")
map.set("excel-solid", "\ue912")
map.set("youtube", "\ue913")
map.set("youtube-solid", "\ue914")
map.set("add-people", "\ue915")
map.set("add-people-solid", "\ue916")
map.set("exclamation-mark", "\ue917")
map.set("exclamation-mark2", "\ue918")
map.set("exclamation-mark-solid", "\ue919")
map.set("arrow-left", "\ue91a")
map.set("arrow-left-solid", "\ue91b")
map.set("arrow-right", "\ue91c")
map.set("arrow-right-solid", "\ue91d")
map.set("at-sign", "\ue91e")
map.set("at-sign-solid", "\ue91f")
map.set("full-battery", "\ue920")
map.set("full-battery-solid", "\ue921")
map.set("empty-battery", "\ue922")
map.set("empty-battery-solid", "\ue923")
map.set("double-bus-stop", "\ue924")
map.set("double-bus-stop-solid", "\ue925")
map.set("calendar", "\ue926")
map.set("calendar-solid", "\ue927")
map.set("calendar2", "\ue928")
map.set("walking", "\ue929")
map.set("walking-solid", "\ue92a")
map.set("clock", "\ue92b")
map.set("clock-solid", "\ue92c")
map.set("settings-sign", "\ue92d")
map.set("settings-sign-solid", "\ue92e")
map.set("construction-works", "\ue92f")
map.set("construction-works2", "\ue930")
map.set("construction-works-solid", "\ue931")
map.set("tickets", "\ue932")
map.set("tickets-solid", "\ue933")
map.set("wheelchair", "\ue934")
map.set("wheelchair-solid", "\ue935")
map.set("percent", "\ue936")
map.set("percent-solid", "\ue937")
map.set("ticket", "\ue938")
map.set("ticket-solid", "\ue939")
map.set("world", "\ue93a")
map.set("world-solid", "\ue93b")
map.set("pen", "\ue93c")
map.set("pen-solid", "\ue93d")
map.set("heart", "\ue93e")
map.set("heart-solid", "\ue93f")
map.set("question-mark", "\ue940")
map.set("question-mark-solid", "\ue941")
map.set("home-icon", "\ue942")
map.set("home-icon-solid", "\ue943")
map.set("bulb", "\ue944")
map.set("bulb-solid", "\ue945")
map.set("key", "\ue946")
map.set("key-solid", "\ue947")
map.set("menu-button", "\ue948")
map.set("menu-button-solid", "\ue949")
map.set("lock", "\ue94a")
map.set("lock-solid", "\ue94b")
map.set("working", "\ue94c")
map.set("working-solid", "\ue94d")
map.set("location", "\ue94e")
map.set("location-solid", "\ue94f")
map.set("minus", "\ue950")
map.set("minus-solid", "\ue951")
map.set("mobile", "\ue952")
map.set("mobile-solid", "\ue953")
map.set("right", "\ue954")
map.set("right-solid", "\ue955")
map.set("nfc", "\ue956")
map.set("nfc-solid", "\ue957")
map.set("phone", "\ue958")
map.set("phone-solid", "\ue959")
map.set("location-point", "\ue95a")
map.set("location-a", "\ue95b")
map.set("location-b", "\ue95c")
map.set("pointy-u", "\ue95d")
map.set("pointy-u-solid", "\ue95e")
map.set("play", "\ue95f")
map.set("play-solid", "\ue960")
map.set("plus", "\ue961")
map.set("plus-solid", "\ue962")
map.set("a-solid", "\ue963")
map.set("b-solid", "\ue964")
map.set("left", "\ue965")
map.set("left-solid", "\ue966")
map.set("floppy-disc", "\ue967")
map.set("floppy-disc-solid", "\ue968")
map.set("search", "\ue969")
map.set("search-solid", "\ue96a")
map.set("paragraph", "\ue96b")
map.set("paragraph-solid", "\ue96c")
map.set("triangle", "\ue96d")
map.set("triangle-solid", "\ue96e")
map.set("megaphone", "\ue96f")
map.set("megaphone-solid", "\ue970")
map.set("upstairs", "\ue971")
map.set("upstairs-solid", "\ue972")
map.set("man", "\ue973")
map.set("man-solid", "\ue974")
map.set("windows", "\ue975")
map.set("windows-solid", "\ue976")
map.set("speed", "\ue977")
map.set("speed-solid", "\ue978")
map.set("basket", "\ue979")
map.set("basket-solid", "\ue97a")
map.set("open-lock", "\ue97b")
map.set("open-lock-solid", "\ue97c")
map.set("usb-icon", "\ue97d")
map.set("usb-icon-solid", "\ue97e")
map.set("tick", "\ue97f")
map.set("tick-solid", "\ue980")
map.set("www", "\ue981")
map.set("www-solid", "\ue982")
map.set("wifi", "\ue983")
map.set("wifi-solid", "\ue984")
map.set("zoom", "\ue985")
map.set("zoom-solid", "\ue986")
map.set("shrink", "\ue987")
map.set("shrink-solid", "\ue988")
map.set("8arrows", "\ue989")
map.set("8arrows-solid", "\ue98a")
map.set("user", "\ue98b")
map.set("user-solid", "\ue98c")
map.set("cash", "\ue98d")
map.set("cash-solid", "\ue98e")
map.set("card-reader", "\ue98f")
map.set("card-reader-solid", "\ue990")
map.set("bike", "\ue991")
map.set("bike-solid", "\ue992")
map.set("cctv", "\ue993")
map.set("cctv2", "\ue994")
map.set("cctv-solid", "\ue995")
map.set("get-coins", "\ue996")
map.set("get-coins-solid", "\ue997")
map.set("get-coins-and-notes", "\ue998")
map.set("get-coins-and-notes-solid", "\ue999")
map.set("forbidden", "\ue99a")
map.set("credit-cards", "\ue99b")
map.set("credit-cards-solid", "\ue99c")
map.set("percent2", "\ue99d")
map.set("percent2-solid", "\ue99e")
map.set("black", "\ue99f")
map.set("coins2", "\ue9a0")
map.set("coins2-solid", "\ue9a1")
map.set("anker", "\ue9a2")
map.set("anker-solid", "\ue9a3")
map.set("15km", "\ue9a4")
map.set("15km-solid", "\ue9a5")
map.set("5km", "\ue9a6")
map.set("5km-solid", "\ue9a7")
map.set("5slash30", "\ue9a8")
map.set("5slash30-2", "\ue9a9")
map.set("no-cash", "\ue9aa")
map.set("no-cash2", "\ue9ab")
map.set("center", "\ue9ac")
map.set("group", "\ue9ad")
map.set("group-solid", "\ue9ae")
map.set("15", "\ue9af")
map.set("15-2", "\ue9af")
map.set("15-solid", "\ue9b0")
map.set("-50percent", "\ue9b1")
map.set("-50percent-solid", "\ue9b2")
map.set("180", "\ue9b3")
map.set("180-solid", "\ue9b4")
map.set("insert-notes", "\ue9b5")
map.set("insert-notes-solid", "\ue9b6")
map.set("insert-coins", "\ue9b7")
map.set("insert-coins-solid", "\ue9b8")
map.set("validate-ticket", "\ue9b9")
map.set("validate-ticket-solid", "\ue9ba")
map.set("x", "\ue9bb")
map.set("x-solid", "\ue9bc")
map.set("world-with-4-arrows", "\ue9bd")
map.set("world-with-4-arrows-solid", "\ue9be")
map.set("nfc-ticket", "\ue9bf")
map.set("nfc-ticket-solid", "\ue9c0")
map.set("-90percent", "\ue9c1")
map.set("-90percent-solid", "\ue9c2")
map.set("no-notes", "\ue9c3")
map.set("no-notes-2", "\ue9c4")
map.set("no-cards", "\ue9c5")
map.set("no-cards-2", "\ue9c6")
map.set("night-bus", "\ue9c7")
map.set("night-bus-solid", "\ue9c8")
map.set("24h", "\ue9c9")
map.set("24h-solid", "\ue9ca")
map.set("7", "\ue9cb")
map.set("7-solid", "\ue9cc")
map.set("cash-okay", "\ue9cd")
map.set("cash-okay-solid", "\ue9ce")
map.set("cards", "\ue9cf")
map.set("cards-solid", "\ue9d0")
map.set("pentagon", "\ue9d1")
map.set("pentagon-solid", "\ue9d2")
map.set("old-man", "\ue9d3")
map.set("old-man-solid", "\ue9d4")
map.set("man2", "\ue9d5")
map.set("man2-solid", "\ue9d6")
map.set("three-quarter-black", "\ue9d7")
map.set("three-quarter-white", "\ue9d8")
map.set("get-notes", "\ue9d9")
map.set("get-notes-solid", "\ue9da")
map.set("get-notes-solid", "\ue9da")
map.set("no-ticket-machine", "\ue9db")
map.set("no-ticket-machine2", "\ue9dc")
map.set("academical", "\ue9dd")
map.set("book", "\ue9de")
map.set("book-solid", "\ue9df")
map.set("academical-solid", "\ue9e0")
map.set("10km", "\ue9e1")
map.set("10km-solid", "\ue9e2")
map.set("30km", "\ue9e3")
map.set("30km-solid", "\ue9e4")
map.set("72h", "\ue9e5")
map.set("72h-solid", "\ue9e6")
map.set("10-ticket", "\ue9e7")
map.set("10-ticket-solid", "\ue9e8")
map.set("metro-ticket", "\ue9e9")
map.set("metro-ticket-solid", "\ue9ea")
map.set("bus-ticket", "\ue9eb")
map.set("bus-ticket-solid", "\ue9ec")
map.set("phone-ticket", "\ue9ed")
map.set("phone-ticket-solid", "\ue9ee")
map.set("2-ticket", "\ue9ef")
map.set("2-ticket-solid", "\ue9f0")
map.set("ticket-validation", "\ue9f1")
map.set("ticket-validation-solid", "\ue9f2")
map.set("25km", "\ue9f3")
map.set("25km-solid", "\ue9f4")
map.set("20km", "\ue9f5")
map.set("20km-solid", "\ue9f6")
map.set("14", "\ue9f7")
map.set("14-solid", "\ue9f8")
map.set("phone-ticket-okay", "\ue9f9")
map.set("phone-ticket-okay-solid", "\ue9fa")
map.set("plus7", "\ue9fb")
map.set("plus7-solid", "\ue9fc")
map.set("baby-buggy", "\ue9fd")
map.set("baby-buggy-solid", "\ue9fe")
map.set("365", "\ue9ff")
map.set("365-solid", "\uea00")
map.set("bike2", "\uea01")
map.set("bike2-solid", "\uea02")
map.set("BplusR", "\uea03")
map.set("BplusR-solid", "\uea04")
map.set("bridge", "\uea05")
map.set("bridge-solid", "\uea06")
map.set("bus", "\uea07")
map.set("bus-solid", "\uea08")
map.set("car", "\uea09")
map.set("car-solid", "\uea0a")
map.set("ski-lift", "\uea0b")
map.set("ski-lift-solid", "\uea0c")
map.set("bus2", "\uea0d")
map.set("bus3", "\uea0e")
map.set("sun", "\uea0f")
map.set("sun-solid", "\uea10")
map.set("boat-line", "\uea11")
map.set("boat-line-solid", "\uea12")
map.set("truck", "\uea13")
map.set("truck-solid", "\uea14")
map.set("enter-bus-in-front", "\uea15")
map.set("sideway-lift", "\uea16")
map.set("sideway-lift-solid", "\uea17")
map.set("mav-hev", "\uea18")
map.set("mav-hev-solid", "\uea19")
map.set("information", "\uea1a")
map.set("information-solid", "\uea1b")
map.set("metro", "\uea1c")
map.set("metro-solid", "\uea1d")
map.set("motorcycle", "\uea1e")
map.set("motorcycle-solid", "\uea1f")
map.set("night-line", "\uea20")
map.set("night-line-solid", "\uea21")
map.set("p", "\uea22")
map.set("p-solid", "\uea23")
map.set("parking", "\uea24")
map.set("parking-solid", "\uea25")
map.set("walking2", "\uea26")
map.set("walking-solid2", "\uea27")
map.set("park-and-ride", "\uea28")
map.set("park-and-ride-solid", "\uea29")
map.set("park-and-ride-roof", "\uea2a")
map.set("park-and-ride-roof-solid", "\uea2b")
map.set("train", "\uea2c")
map.set("train-solid", "\uea2d")
map.set("bus-solid2", "\uea2d")
map.set("bus-solid3", "\uea2e")
map.set("r-with-bird", "\uea2f")
map.set("r-with-bird-solid", "\uea30")
map.set("road", "\uea31")
map.set("road-solid", "\uea32")
map.set("ship", "\uea33")
map.set("ship-solid", "\uea34")
map.set("city-bus", "\uea35")
map.set("city-bus2", "\uea36")
map.set("city-bus-solid", "\uea37")
map.set("tram", "\uea38")
map.set("tram-solid", "\uea39")
map.set("taxi", "\uea3a")
map.set("taxi2", "\uea3b")
map.set("taxi-solid", "\uea3c")
map.set("validator", "\uea3d")
map.set("validator-solid", "\uea3e")
map.set("bus-side", "\uea3f")
map.set("bus-side2", "\uea40")
map.set("bus-side-solid", "\uea41")
map.set("happy-tram", "\uea42")
map.set("happy-tram2", "\uea43")
map.set("happy-tram-solid", "\uea44")
map.set("trolleybus", "\uea45")
map.set("trolleybus-solid", "\uea46")
map.set("suburban-railway", "\uea47")
map.set("suburban-railway-solid", "\uea48")
map.set("picture", "\uea49")
map.set("up", "\uea4a")
map.set("up-solid", "\uea4b")
map.set("down", "\uea4c")
map.set("down-solid", "\uea4d")
map.set("search2", "\uea4e")
map.set("down2", "\uea4f")
map.set("left2", "\uea50")
map.set("right2", "\uea51")
map.set("up2", "\uea52")
map.set("bus-solid4", "\uea53")
map.set("retro-tram-solid", "\uea54")
map.set("bus4", "\uea55")
map.set("retro-tram", "\uea56")
map.set("anker2", "\uea57")
map.set("anker-solid2", "\uea58")
map.set("sound-file2", "\uea59")
map.set("sound-file", "\uea5a")
map.set("sound-file-solid", "\uea5b")
map.set("sound-file-solid2", "\uea5c")
map.set("wifi-antenna-solid", "\uea5d")
map.set("microphone", "\uea5e")
map.set("microphone-solid", "\uea5f")
map.set("microphone2", "\uea60")
map.set("microphone2-solid", "\uea61")
map.set("ipod", "\uea62")
map.set("ipod-solid", "\uea63")
map.set("podcast", "\uea64")
map.set("podcast-solid", "\uea65")
map.set("soundcloud", "\uea66")
map.set("spotify", "\uea67")
map.set("wifi-antenna-solid-egg", "\uea68")
map.set("deezer-solid", "\uea69")
map.set("soundcloud-solid", "\uea6a")
map.set("itunes", "\uea6b")
map.set("itunes-solid", "\uea6c")
map.set("itunes2", "\uea6d")
map.set("apple-music-solid", "\uea6e")
map.set("tik-tok", "\uea6f")
map.set("tik-tok-solid", "\uea70")
map.set("christmas-tree", "\uea71")
map.set("christmas-tree-solid", "\uea72")
map.set("drink", "\uea73")
map.set("drink-solid", "\uea74")
map.set("return-solid", "\uea75")
addMissing(map, 0xE900, 0xEA75)

export default createResource('BKK-Icon-Pack', map);
