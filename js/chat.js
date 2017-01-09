



var X00Gems = ['9,900 Juwelen generiert', '25,900 Juwelen generiert', '45,900 Juwelen generiert', '99,900 Juwelen generiert', '150,000 Juwelen generiert', '290,000 Juwelen generiert', '490,900 Juwelen generiert'];
var X00CF = ['img/cf/Germany.png', 'img/cf/Netherlands.png', 'img/cf/Sweden.png', 'img/cf/France.png', 'img/cf/Switzerland.png'];

function X00Random(X00Minimum, X00Maximum) {
    return Math.floor((Math.random() * X00Maximum) + X00Minimum);
}

var X00ActivityIntervalSeconds;
var X00ActivitySecondsCurrent = 0;

function X00ActivitiesAdd() {
    clearInterval(X00ActivityIntervalSeconds);
    X00ActivitySecondsCurrent = 0;
    $('#X00Activities div').remove();
    $('<div style="text-align: center;"><h3><img src="' + X00CF[X00Random(0, X00CF.length)] + '" alt="Country Flag" class="country-flag" /><span class="subheader ipsubheader">IP: ' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '</span> <span class="subheader">Hat vor</span> <span class="subheader"><span id="X00ActivitySeconds" class="ipsubheader"> 0s</span>  <span class="subheader recgenvalue" style="font-weight: bold; color: #ffcc05;">' + X00Gems[X00Random(0, X00Gems.length)] + ' </span> <span class="subheader">').appendTo('#X00Activities').hide().fadeIn(250);
    X00ActivityIntervalSeconds = setInterval(function() {
        X00ActivitySecondsCurrent++;
        $('#X00ActivitySeconds').html(X00ActivitySecondsCurrent + 's');
    }, 1000);
}

$(function() {

    X00ActivitiesAdd();
    var X00Activities = function() {
        setTimeout(function() {
            X00ActivitiesAdd();
            X00Activities();
        }, X00Random(1000, 25000));
    };
    X00Activities();


});


$(".follow-scroll").hide();
$(window).scroll(function() {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 500) {
        $(".follow-scroll").fadeIn();
    } else {
        $(".follow-scroll").fadeOut();
    }

});


// online stats
var ee;
var eenum2 = 334;

function dis_num3() {
    document.getElementById("online2").innerHTML = eenum2;
    var randWay = Math.floor(Math.random() * 10 + 1);
    if (randWay <= 5) {
        eenum2 = eenum2 + Math.floor(Math.random() * 10 + 1);;
    } else {
        eenum2 = eenum2 - Math.floor(Math.random() * 10 + 1);;
    }
    ee = setTimeout("dis_num3()", 1000);
}
dis_num3();

var ChatReplied = false;
var ChatDate = new Date();
var ChatUserName = '';
var ChatUserNames = ["TurtletheCat", "Pobelter", "EugeneJPark", "Doublelift", "C9Sneaky", "lamBjerg", "Popobelterold", "HOGEE", "WizFujiiN", "HotGuy6Pack", "dawoofsclaw", "TiPApollo", "Soeren", "FSNChunkyfresh", "Ariana22ROO", "Waker", "Podu", "C9Hard", "Shiphtur", "HOoZy", "Chapanya", "Dyrus", "Entranced", "WildTurtle", "WildTurtl", "lntense", "Hauntzer", "LiquidFeniX", "THExJOHNxCENA555", "Imaqtpie", "ZionSpartan", "JJackstar", "Ekkocat", "LiquidKEITH", "mldkingking", "Loopercorn", "TiPMa", "Ohhhq", "ninjamaster69xxx", "CaliTrlolz8", "ice", "C9Meteos", "JannaMechanics", "KEITHMCBRIEF", "dunamis", "Quasmire", "scorro", "LiquidQuas", "GVHauntzer", "PengYiliang", "Casely", "wahoolahoola", "godisfeng66666", "Zbuum", "ilovefatdongs", "TransIogic", "LemonBoy", "Link", "Chipotlehunter", "TDKkina", "DJTrance", "Duocek", "Hate", "KonKwon", "Nihillmatic", "Zaryab", "intero", "Biofrost", "LongCat4", "CSTJesiz", "GVKeane", "TiPyoondog", "RedoutabIe", "LiquidXpecial", "JayJ", "GVCop", "iKeNNyu", "C9Hai", "FunFrock", "CLGLourlo", "evertan", "Chaullenger", "Aniratak", "PorpoiseDeluxe", "Isuyu", "CLGDandyLite", "Arcsecond", "BloodWater", "Jynthe", "Sickoscott", "RickyTang", "DaBox", "ALLRekklesvNA", "Hoofspark", "DuBuKiD", "AdrianMa", "GuriAndGunji", "stuntopia", "RyanChoi", "AiShiTeru", "FSNMeMer", "J0kes", "C9Balls", "C9SoIo", "yungmulahBABY", "FeelTheLove", "dawolfsclaw", "BaamSouma", "NMEotter", "stuntopolis", "llRomell", "GoJeongPa", "p0z", "Trisexual", "MarkPassion", "Seeiya", "AAltec", "C9LemonNation", "maplestreet8", "goldenglue", "MegaZero", "VIPEEEEEEEEEEEER", "Panchie", "fabbbyyy", "halo3madsniper", "iLucent", "1k2o1ko12ko12ko2", "Bokbokimacat", "VANISHINGDRAG0N", "LiquidPiglet", "playmkngsupport", "Gambler", "Gaggiano", "JJayel", "JoopsaKid", "1brayle", "Azingy", "Kebrex", "WahzYan", "willxo", "TailsLoL", "darksnipa47", "Thyak", "JimmyTalon", "vane", "sooyoung", "lalaisland", "Lourlo", "Sunar", "PlayWithAnimals", "scarra", "HUYAGorilIA", "Lock0nStratos", "aphromoo", "KMadClown", "ChaIlengerAhri", "YY90001PiKaChu", "Thefatkidfromup", "ahqwe5tdoor", "Nintenpai", "JustJayce", "toontown", "BasedYoona", "GoldStars", "ExecutionerKen", "nicemoves", "InvertedComposer", "LiquidIWD", "Stan007", "woshishabi", "JukeKing", "xPecake", "BlGHUEVOS", "Plun", "KingCobra", "TDKSmoothie", "TSMLustboy", "C10Meteos", "lllllllllllllIII", "ohdaughter", "PekinWoof", "BrandonFtw8", "m2sticc", "DaiJurJur", "DontMashMe", "CaseOpened", "otte", "wutroletoplay", "Thurtle", "Dodo8", "Frostalicious", "bobqinXD", "MrCarter", "Hellkey", "Chimonaa1", "DaBoxII", "GVVicious", "Jummychu", "PAlNLESS", "LiLBunnyFuFuu", "Lukeeeeeeeeee", "Lattman", "Daserer", "AlliancePatrick", "Lionsexual", "St1xxay", "Kojolika", "CSTCris", "KojotheCat", "StellaLoussier", "Gleebglarbu", "Altrum", "RiotMeyeA", "Rule18", "mandatorycloud", "Tritan", "LiquidDominate", "cidadedecack", "RoA", "BillyBoss", "xPepastel", "TaketheDraw", "ST2g", "Migipooop", "dKiWiKid", "NMEflareszx", "Gundamu", "imp", "DDABONG", "Daydreamin", "Nightlie", "MRHIGHLIGHTREEL", "Shweeb", "JinMori", "Tailsz", "Bischu", "CRBRakin", "Chaox", "Grigne", "LogicalDan", "DAKular", "DifferentSword", "Geranimoo", "InnoX", "FishingforUrf", "FluffyKittens206", "ImJinAh", "CloudNguyen", "moonway", "whoishe", "TiensiNoAkuma", "Ethil", "nothinghere", "SuperMetroid", "hiimgosu", "Mammon", "BGJessicaJung", "coBBz", "waitingforu", "LearningToPIay", "YiOwO", "heavenTime", "AnDa", "WakaWaka", "hashinshin", "TDKKez", "MariaCreveling", "Cypress", "YahooDotCom", "Phanimal", "Aror", "RFLegendary", "BenNguyen", "AHHHHHHHHH", "Linsanityy", "Valkrin", "Gate", "Allorim", "Johnp0t", "Superrrman", "Laughing", "AKAPapaChau", "denoshuresK", "Anthony", "Nightblue3", "Aranium", "Pallione", "BamfDotaPlayer", "FakerSama", "xiaolan", "Sweept", "HooManDu", "XiaoWeiXiao", "HctMike", "Revenge", "Apauloh", "latebloomer", "CRBFyre", "MongolWarrior", "Hiphophammer", "CoachLFProTeam", "hiimria", "Jackoo", "Saskio", "DadeFakerPawn", "GVStvicious", "NeonSurge", "NMEBodydrop", "MatLifeTriHard", "PantsareDragon", "GinormousNoob", "IMbz", "miqo", "VoyboyCARRY", "Hakuho", "Hexadecimal", "themassacre8", "Ayr", "SeaHorsee", "F0rtissimo", "GamerXz", "Remie", "Soghp", "Raimazz", "Ultimazero", "bigfatlp", "NMETrashyy", "C9LOD", "Popuh", "SAGASUPVEIGM", "Iamagoodboy", "TrollerDog", "Descraton", "LiquidInoriTV", "MiniMe", "IlIlIIIlIIIIlIII", "Shweebie", "KatLissEverdeen", "PoppersOP", "B1GKr1T", "DGB", "stephyscute2", "TEESEMM", "Cyprincess", "baohando", "urbutts", "maplestreeTT", "jamee", "SawitonReddit", "VeryBitter", "BenignSentinel", "MrJuvel", "Denny", "LeeGuitarStringa", "DKrupt", "LAGEhsher", "eLLinOiSe", "MochiBalls", "Sonnynot6", "ixou", "Taeyawn", "Dezx", "7hThintoN", "BeautifulKorean", "VwSTeesum", "TLIWDominate", "Vsepr", "ktSmurf", "Vultix", "Soredemo", "ROBERTxLEE", "AnnieBot", "aksn1per", "IamFearless", "FrostyLights", "SoYung", "Tuoooor", "Polx", "Agolite", "CloudWater", "Delta", "LAGOrbwalk", "sexycan", "SimonHawkes", "Rohammers", "NMEInnoX", "ChineseJester", "IAmDoughboy", "Cytosine", "Vanxer", "SDiana2", "Araya", "TheItalianOne", "F1Flow", "Kazahana", "Malajukii", "xiaoweiba", "JoshMabrey", "shinymew", "Event", "freelancer18", "ZnipetheDog", "hiitsviper", "HappyBirfdizzay", "Abou222", "Gir1shot2diamond", "KiNGNidhogg", "PurpleFloyd", "Rathul", "Kwaku", "BeachedWhaIe", "14h", "Xpecial", "CLGThink", "Aiciel", "oerh", "butttpounder", "TalkPIayLove", "jordank", "TwistyJuker", "MeganFoxisGG", "NiHaoDyLan", "TallerACE", "Doomtrobo", "Wardrium", "TwtchTviLoveSezu", "Westrice", "iMysterious", "BennyHung", "EnmaDaiO", "xTc4", "FallenBandit", "RumbIeMidGG", "deft1", "GochuHunter", "XxRobvanxX", "DuoChiDianShi", "coLBubbadub", "LeBulbe", "TanHat", "Dusty", "Jibberwackey", "Tallwhitebro", "llllllllllllIIII", "LilBuu", "Diamond", "cesuna", "BigolRon", "xSojin", "Gh3ttoWatermelon", "KingofMemes", "111094Jrh", "bive", "Yammy", "FasScriptor", "Docxm", "GVBunnyFuFuu", "Alphabetical", "Liquidzig", "YouHadNoDream", "TINYHUEVOS", "Sheepx", "GangstaSwerve", "LeBulbetier", "amandagugu", "Rushmore", "AnnieCHastur", "OverlordForte", "Muffintopper66", "Kazura", "zetsuen", "wozhixiangyin", "CaptainNuke", "alextheman", "Seongmin", "Working", "kyaasenpaix3", "gurminder", "VwSKhoachitizer", "TGZ", "KrucifixKricc", "Kevnn", "Academiic", "ArianaLovato", "Elemia", "CLGDeftsu", "XerbeK", "CeIestic", "RedEyeAkame", "Kerpal", "xFSNSaber", "MakNooN", "Hcore", "MrGamer", "zeralf", "Fenixlol", "Indivisible", "SHOWMETHEMONEY", "Adorations", "Niqhtmarex", "RambointheJungle", "Iucid", "iOddOrange", "Uncover", "DD666666", "r0b0cop", "VictoricaDebloiz", "Gleebglarb", "EmperorSteeleye", "SillyAdam", "WWWWWWWWWWWWWWMW", "tempname456543", "FeedOn", "iJesus69", "OmegaB", "Riftcrawl", "Xandertrax", "Krymer", "TwistedSun", "DeTRFShinmori", "RiceFox", "iKoogar", "Mizuji", "White", "zgerman", "FORG1VENliftlift", "sakurafIowers", "xSaury", "PiPiPig", "Pyrr", "TheCptAmerica", "NtzNasty", "SlowlyDriftnAway", "cre4tive", "LAGGoldenShiv", "FSNDLuffy", "NintendudeX", "duliniul", "Cybody", "Odete49", "TFBlade", "Platoon", "CopyCat", "BarbecueRibs", "TitanDweevil", "HeroesOfTheStorm", "JRT94", "RedBerrrys", "Rockblood", "YoloOno", "BalmungLFT", "IreliaCarriesU", "LikeAMaws", "PaulDano", "ErzaScarIet", "KiritoKamui", "ProofOfPayment", "DonPorks", "BarronZzZ", "Pikaboo", "aLeo", "MikeytheBully", "7Qing", "BillyBossXD", "DragonRaider", "Haughty", "KMadClowns", "ikORY", "Nikkone", "WeixiaTianshi", "QQ346443922", "FoxDog", "Tahx", "Hawk", "Haruka", "Scrumm", "cackgod", "iAmNotSorry", "coLROBERTO", "GladeGleamBright", "MonkeyDufle", "M1ssBear", "theletter3", "Sandrew", "RongRe", "MrGatsby", "xBlueMoon", "Merryem", "ElkWhisperer", "Enticed", "Draguner", "DeliciousMilkGG", "Patoy", "Lucl3n3Ch4k0", "Smoian", "Piaget", "Xiaomi", "zeflife", "IsDatLohpally", "HatersWantToBeMe", "Blackmill", "PrinceChumpJohn", "NhatNguyen", "Nebulite", "IAmTheIRS", "TedStickles", "LOD", "CallMeExtremity", "kimjeii", "Kappasun", "JJJackstar", "TSMMeNoHaxor", "Zealous", "Normalize", "Topcatz", "KimchimanBegins", "DrawingPalette", "AnarchyofDinh", "hiimxiao", "MikeHct", "Manco", "ChumpJohnsTeemo", "Heejae", "delirous", "Iodus", "WakaWakaWak", "Hawez", "ThaOGTschussi", "TwistedFox", "PureCorruption", "HotshotGG", "Turdelz", "ysohardstylez", "Brainfre3z", "ilyTaylor", "Zaineking", "QualityADC", "LingTong", "DyrudeJstormRMX", "AnObesePanda", "silvermidget", "CornStyle", "LafalgarTaw", "Zeyzal", "Meowwwwwww", "Pokemorph", "JimmyHong", "Hoardedsoviet", "Nematic", "C9Yusui", "BlownbyJanna", "Sojs", "Cerathe", "FairieTail", "Xeralis", "ichibaNNN", "SerenityKitty", "Contractz", "WWvvWvvWvvwWwvww", "BlueHole", "SAGANoPause", "Mookiez", "RiotChun", "ValkrinSenpai", "HeXrisen", "CptJack", "Sleepyz", "HurricaneJanna", "ToxiGood", "ItsYourChoice", "TaintedDucky", "probablycoL", "Ina", "FreeGaming", "Phaxen", "tofumanoftruth", "xHeroofChaos", "Rockllee", "Sunohara", "Ryzer", "SpiritDog", "Kazma", "Sjvir", "Maulface", "SombreroGalaxy", "Bebhead", "ecco", "AurionKratos", "RoseByrne", "Kammgefahr", "VwSSandvich", "TDKLouisXGeeGee", "Picarus", "erwinbooze", "xrawrgasm", "Tangularx", "CSauce", "Back2Nexus", "SepekuAW", "Chuuper", "Airtom", "pro711", "Theifz", "SirhcEezy", "LuckyLone56", "AtomicN", "Splorchicken", "00000000", "UpAIlNight", "k3soju", "MikeyC", "s7efen", "FENOMENO", "XIVJan", "Splorgen", "djpocketchange", "Oasis", "Iggypop", "BallsInYourFace", "dopa7", "MasterDragonKing", "ssforfail", "MissyQing", "Endlesss", "badeed", "SmooshyCake", "Karmix", "Alestz", "svbk", "KissMeRDJ", "TeaMALaoSong", "drallaBnayR", "CHRISTHORMANN", "KnivesMillions", "MahNeega", "Sphinx", "Impasse", "Stefono62", "CLGEasy", "GankedFromAbove", "IslandLager", "MrJuneJune", "BrianTheis", "ShorterACE", "morippe", "Meatmush", "Dusey", "Paperkat", "Submit", "TooPro4u", "Porogami", "iuzi", "Suzikai", "TDKNear", "LiquidInori", "Deleted", "NtzLeopard", "UnKooL", "Desu", "Born4this", "sickening", "AllianceMike", "Dinklebergg", "YouGotFaker", "FusionSin", "IMBAYoungGooby", "Neverlike", "BestGodniviaNA", "FFat20GGWP", "kMSeunG", "AliBracamontes", "rua0311desuyo", "54Bomb99", "jivhust", "Penguinpreacher", "Yashimasta", "Erurikku", "ReeferChiefer420", "WonderfulTea", "Gamely", "OberonDark", "Imunne", "Hoeji", "xTearz", "NicoleKidman", "DonDardanoni", "Wonderfuls", "HentaiKatness69", "Ayai", "EREnko", "Cruzerthebruzer", "Connort", "Anoledoran", "BiggestNoob", "Anangelababy007", "TrojanPanda", "MasterCoach", "Kirmora", "wswgou", "NMEotterr", "DragonxCharl", "uJ3lly", "moosebreeder", "Strompest", "Kurumx", "Protective", "LegacyofHao", "DkBnet", "koreas", "AxelAxis", "NiMaTMSiLe", "Preachy", "WoahItsJoe", "XXRhythmMasterXX", "Lemin", "Destinedwithin", "Afflictive", "Nydukon", "Herald0fDeath", "ChowPingPong", "QuanNguyen", "interest", "Slylittlefox121", "VictimOfTalent", "chadiansile", "iToradorable", "BIackWinter", "Mazrer", "NKSoju", "nhocBym", "Dreemo", "Virus", "CowGoesMooooo", "Masrer", "Michaelcreative", "Emanpop", "Druiddroid", "KevonBurt", "Magicians", "HiImYolo", "LoveSick", "kamonika", "Chunkyfresh", "tongsoojosim", "hiimrogue", "Zookerz", "LiShengShun", "DeTFMYumenoti", "EddieMasao", "AGilletteRazor", "andtheknee", "Hazedlol", "SrsBznsBro", "Spreek", "Toxil", "JustinJoe", "Silverblade12345", "WalterWhiteOG", "SwiftyNyce", "Volt", "DoctorElo", "Connie", "DELLZOR", "aiopqwe", "MidnightBoba", "Sikeylol", "Warmogger", "Melhsa", "OmekoMushi", "Life", "SleepyDinosaur", "Leonard", "CatVomit", "Likang45", "PSiloveyou", "xtsetse", "ClydeBotNA", "Cpense", "Arakune", "shadowshifte", "LeeBai", "SexualSavant", "CornChowder", "DeTRFEsteL", "Astro", "deDeezer", "Jayms", "v1anddrotate", "JGLafter", "UhKili", "Aceyy", "Zik", "RiNDiN", "Grandederp", "KawaiiTheo", "Senjogahara", "Th3FooL", "GusTn", "TheTyrant", "GoJeonPa", "DJJingYun", "Egotesticle", "IoveLu", "OGNEunJungCho", "kevybear", "ImJas", "Agrorenn", "Synxia", "DouyuTVForgottt", "GrimSamurai", "6666666666666", "RockleeCtrl", "Xode", "QQ459680082", "KittenAnya", "Zakard", "MARSIRELIA", "WallOfText", "SireSnoopy", "kelppowder", "Hxadecimal", "onelaugh", "MisoMango", "PiggyAzalea", "MisterDon", "VirginEmperor", "suzuXIII", "P18GEMEINV", "Kurumz", "kjin", "CcLiuShicC", "ExileOfTheBlade", "Iambbb", "Fubguns", "Asutarotto", "WhatisLove", "Niqhtmarea", "L0LWal", "JannaFKennedy", "Steffypoo", "KillerHeedonge", "AsianSGpotato", "whiteclaw", "GATOAmyTorin", "lovemyRMB", "Frostarix", "voyyboy", "Melo", "RiotZALE", "ElvishGleeman", "givesyouwiings", "LoveIy", "Packy", "Ntzsmgyu", "Susice", "Dontqqnubz", "mikeshiwuer", "Chulss", "MASTERDING", "Scorpionz", "KKOBONG", "Veeless", "NtzMoon", "Leesinwiches", "RefuseFate", "TP101", "ozoss0", "SeaShell", "Baesed", "Foolish", "jivhust1", "KMadKing", "CHRlSS", "jbraggs", "BeefTacos", "Xoqe", "Naeim", "Aerodactyl", "Triett", "194IQredditor", "Pulzar", "Windgelu", "Suadero", "Zulgor", "Senks", "cAbstracT", "SwagersKing", "AkameBestGirl", "ThePrimaryEdict", "arthasqt", "Lobstery", "MisterOombadu", "TheFriendlyDofu", "Oryziaslatipes", "ugg1", "Flandoor", "HawkStandard", "wimbis", "JimmerFredette", "VikingKarots", "Sorcerawr", "Ciscla", "Suffix", "MrCow", "METALCHOCOB0", "Dessias", "LevelPerfect", "midVox", "Junha", "Hickus", "gamepiong", "AirscendoSona", "HellooKittie", "Jesse", "Rainaa", "ILoveNASoloQ", "Colonelk1", "DeTRFZerost", "Szmao", "TacoKat", "1tzJustVictor", "HomedogPaws", "DioDeSol", "PeterBrown", "FrannyPack", "AbsoluteFridges", "TheBiddler", "ELMdamemitai", "Old", "Pavle", "nathanielbee", "MakiIsuzuSento", "nweHuang", "EvanRL", "yorozu", "forgivenbow", "alexxisss", "Cloverblood", "Entities", "Believe", "Chiruno", "Xiaobanma", "BestJanna", "Neko", "TheEyeofHorus", "IGotSunshine", "Shade20", "Sprusse", "Imacarebear", "Kenleebudouchu", "LockDownExec", "Chubymonkey", "HunterHagen", "Applum", "DaoKho", "MrBlackburn", "beatmymeat", "BestDota2Sona", "chubbiercheeks", "KillaKast", "Betsujin", "TheAmberTeahouse", "BellaFlica", "ManateeWaffles", "Babalew", "charmanderu", "TooSalty", "LotusBoyKiller", "Bulgogeeeee", "Nerzhu1", "Lovelyiris", "QuantumFizzics", "freakingnoodles", "Pdop1", "Bakudanx", "Martel", "DoctorDoom", "equalix", "CARDCAPTORCARD", "Dyad", "Papasmuff", "TheBroskie", "Wadenation", "Flyinpiggy", "Wingsofdeathx", "IamOsiris", "ArtThief", "LotusEdge", "fwii", "Kios", "Shampu", "Nickpappa", "Yukari", "RayXu", "Emeraldancer", "TwoPants", "EnzoIX", "Jacka", "Plumber", "Skadanton", "C9TGleebglarbu", "BonQuish", "GrimmmmmmmReaper", "SmoSmoSmo", "MewtMe", "Ramzlol", "Mruseless", "Eitori", "S0lipsism", "X1337Gm4uLk03rX", "lloveOreo", "MrChivalry", "Oyt", "AnVu", "RBbabbong", "MASTERROSHl", "dabestmelon", "Potatooooooooooo", "KasuganoHaru", "C9BalIs", "stainzoid", "MrArceeSenpaiSir", "sweetinnocence", "Firehazerd", "EpicLynx", "2011", "PandaCoupIe", "Moelon", "KingKenneth", "Skinathonian", "FelixCC", "snowmine", "Acme", "QmoneyAKAQdollas", "Fexir", "ImbaDreaMeR", "ImNovel", "ButtercupShawty", "touch", "penguin", "Promitio", "DeTRFMoyashi", "Hordstyle", "Iizard", "Jintae", "pichumy", "Upu", "Iemonlimesodas", "TwitchTvAuke", "Promises", "Jintea", "OMikasaAckermanO", "wompwompwompwomp", "Kiyoon", "LiquidNyjacky", "ATColdblood", "SandPaperX", "0Sleepless", "pr0llylol", "AxelsFinalFlame", "DrSeussGRINCH", "ZENPhooka", "oMizu", "HamSammiches", "Pcboy", "RamenWithCheese", "Yook", "Dafreakz", "Winno", "XxWarDoomxX", "LifelessEyes", "UrekMazin0", "FrenchLady", "Pillowesque", "GodOfZed", "D3cimat3r", "broIy", "1stTimeDraven", "Exxpression", "godofcontrol", "nokappazone", "Shoopufff", "IlIIlIIIlIIIIIII", "Fragnat1c", "Abidius", "irvintaype", "YellOwish", "japanman", "CaristinnQT", "LeithaI", "Kitzuo", "Akatsuki", "ROBERTZEBRONZE", "aenba", "Arcenius", "Torgun", "Ryden7", "Entus", "CutestNeo", "MonkeyDx", "Xerosenkio", "JHHoon", "DeTFMCeros", "Rakinas", "MetaRhyperior", "MegaMilkGG", "EmilyVanCamp", "SecretofMana", "Snidstrat", "SJAero", "Mixture", "Teaz89", "ArizonaGreenTea", "AKASIeepingDAWG", "sh4pa", "Hanjaro", "BestFelixNA", "Dragles", "TummyTuck", "sciberbia", "KLucid", "Isunari", "lAtmospherel", "Zwag", "yuBinstah", "ionz", "Nove", "Nickywu", "BlueRainn", "lilgrim", "Rekeri", "Kaichu", "Arnold", "ArcticPuffin11", "UnholyNirvana", "IREGlNALD"];
var ChatContent = ["Wie viele Juwelen kann ich generieren?", "Hat das schon jemand ausprobiert?", "Funktioniert das in NA?", "Warum ist das so leicht? lol", "Einfach unglaublich, hätte nicht gedacht, dass das funktioniert.", "Ich habe 14.000 geschafft, kann's kaum erwarten loszulegen.", "NA Spieler hier, läuft fehlerfrei.", "Kann mir jemand bei der Umfrage helfen?", "OMG!", "LOL!", "ROFL!", "Echt", "Genial", "einfach", "Alter", "Was kann man hier machen?", "Halt den Mund, ich liebe diese Webseite", "Hi Leute", "Wie viele Juwelen hast Du bisher geschafft?", "Welche Umfragen gibt es auf dem Handy?", "Ist das kostenlos?", "Wie lange muss man warten?", "Jepp", "Nein", "Ich weiß", "Warum genau ist das so gut", "Ähm", "vielleicht", "Ich kann nicht mehr warten", "Ist das echt, Leute?", "Danke, Alter, ich weiß das zu schätzen.", "Cool =)", "<Nachricht gelöscht>", "Oh Gott", "verdammt", "Ich liebe es", "Hab mir nie vorgestellt, dass das funktionieren würde, verdammt ist das einfach", "Hab's in den Foren gesehen, das ist schon sehr beeindruckend", "Leute, kein Spam, ok?", "Jemand Lust zu spielen?", "Glaubt ihr, da kommt bald ein Patch", "Das spart mir echt eine Menge Geld", "Weiß jemand, welche Karte besser ist, Prinz oder Hexe??", "Ich bin so glücklich, das gefunden zu haben", "Schaut jemand von euch Nightblue?", "Ich glaube, ich habe die Seite auf Twitch im Stream gesehen", "Einfach Wow", "Wo kriegt man hier Juwelen?", "Ein Freund hat mir davon erzählt", "Danke an wer-auch-immer-diese-Webseite-zuspamt, lol", "Wo gebe ich den Code ein?", "Bisher bin ich damit zufrieden", "Krieg ich das umsonst?", "Tschüss Jungs", "Ok, ich habe mich angemeldet, danke", "Wie viel kann man davon haben", "unglaublich", "Zehn Minuten", "Ich muss jetzt los", "brb", "Du solltest das mal probieren", "Ich bereue es nicht, hier zu sein", "Fuck, das ist echt", "OMG, hört auf zu fragen, wie man Juwelen kriegt, einfach das Formular ausfüllen", "Leute, es ist so einfach, das geht in weniger als einer Minute", "Kann das jemand für mich machen? Mein Benutzername ist brazilpidgey", "Schick mir eine PM bitte", "Wow, was für Noobs, Haha", "niantic bitte", "Heute ist mein Glückstag", "Das ist die beste Juwelen Seite, weil hier alle mehrfach abräumen können", "Ich glaube, hier kriegt jeder Juwelen", "Wann kann ich spielen, ich bin neu hier", "Kostenlose Juwelen?", "Laufen Juwelen ab?", "Ich habe eine große Packung Juwelen für meine Freundin gekauft, sie ist glücklich, und ich hab nichts dafür ausgeben müssen, lol", "Scheiße, die Server sind ständig down", "Witzig, dass das funktioniert, aber es funzt immer", "Hallo nochmal, ich suche hier mehr Juwelen", "Ich brauche ein paar Juwelen, wie kriege ich die", "Das hat funktioniert, lol", "Fuck, ich hab keine Umfragen mehr, hatte bereits um die 50 Riesen in meinem Account", "Woher kommt ihr alle ","Nette Seite für Juwelen", "Ich hing in der Umfrage fest, musste sie nochmal machen, aber dann hat's geklappt", "Danke für die Juwelen!", "Hab ich im Stream gesehen, Mann", "Juwelen funktionieren astrein", "Ich liebe Clash Royale einfach", "Das macht das Spiel noch spaßiger, hoffe ich", "Danke, dass ihr mir aushelft, Kollegen", "Danke an den, der mir geschrieben hat, es hat funktioniert", "Danke, dass Du mir geschrieben hast, Alter", "Wann möchtest Du spielen?", "Stell Dir vor, wie alle darauf gewartet haben", "Hast Du eine Idee, ob das morgen auch noch funktioniert?", "Die beste Juwelen Webseite", "Ist das hier der Twitch Chat?", "Wow, echt viele Leute hier", "Hi Leute, wer hat Juwelen für mich", "Ist irgendwer nicht wegen Clash Royale hier, lol?", "Was war die neuste Erweiterung?", "Wer hat Lust zu chatten, hehe?", "Ich spiele in der EU", "Schau Dir mein Profil an, ich bin reich", "Wann gibt es die Juwelen, Leute?", "Das können sogar Noobs", "Seit wann spielt ihr, wow", "Ich kann das Zeug nur empfehlen", "Toll, kann ich die Erweiterung testen, bevor ich sie kaufe", "Ich kann's kaum erwarten loszulegen!", "Woher kommt ihr?", "Bleibt das für immer kostenlos?", "Ziemlich gute Juwelen Plattform, Leute", "Ich finde das langsam echt gut. Drittes Pack freigeschaltet", "Lohnt sich", "Ok, cool", "Es scheint keine Grenzen zu geben, wie viel Juwelen man kriegen kann, echt episch", "In welchem Land spielt ihr?", "Denke so ist es, Alter", "Vermutlich, aber ich denke, dass das eines Tages scheitert", "Noch funktioniert das", "Ich hab das bisher noch nicht gesehen, aber ich bin von den Ergebnissen beeindruckt!", "Mein Freund wird durchdrehen :D", "cool ", "Es gibt nicht immer Umfragen, aber ich glaube, das liegt daran, dass die Webseite Geld braucht, um Juwelen zu kaufen", "Ich hatte bisher nie ein Problem mit irgendeiner Umfrage, versuch's nochmal?", "Diese Webseite wird viel genutzt, Du musst manchmal ein bisschen Geduld haben", "Wo habt ihr das gefunden?", "Wann geht es mit den Juwelen los?", "Danke für die Juwelen, Leute!", "Ich wünschte, ich hätte die Seite schon früher gefunden", "Ich habe so viel Geld für Clash Royale ausgegeben, lol, gut dass es hier kostenlos geht", "Wieso gibt es hier eigentlich keine Trolle?", "Da hab ich ein Riesenschwein gehabt", "Braucht ein Kollege hier Hilfe?", "Ich würde einen Screenshot machen, aber vielleicht meldest Du mich dafür", "Gibt es neue Karten in dem Update?", "Hast Du schon das 14.500er Pack versucht? Ich habe es bei NA benutzt, aber vielleicht funktioniert es auch anderswo", "Trollo, Clash Royale ist kacke, hahahaha", "Ich habe das Gefühl, dass es wieder richtig gut wird. Es wurde gerade langweilig, lol", "Ich denke schon", "Was? Du kannst hier Juwelen kostenlos kriegen?", "Das klingt doch klasse, Kollegen", "Ist hier jemand auf reddit?", "Ok, ich glaube, dass es funktioniert. Ich habe mich gerade eingeloggt und habe meine Juwelen gesehen ROFL", "Ich hatte ein paar Schwierigkeiten mit der Umfrage, aber es ist kein Problem, wenn etwas einfaches wählst", "Meine Freunde auf Facebook spammen darüber jeden Tag, die sind echt glücklich." , "Wo pack ich mein Handy hin", "Was?", "Ja, ich hab's auch", "Wieso würde irgendwer da hin gehen und einfach haten und rumspammen, pah", "Noobs echt jetzt, wenn ihr nicht wisst, wie es geht, spammt hier nicht alle voll, ok", "Großartiger Generator, gut, dass ich den gefunden habe", "Ich hoffe, hier sind nicht allzu viel Kinder im Chat", "Josh, bist Du hier?", "Das Freischalten dauert schon", "Derp", "Ich frage mich, ob das legal ist.", "Läuft das auf OCE?", "Ich musste die Seite neuladen, bevor es geklappt hat.", "Ich habe es drei Mal benutzt und drei Mal 14.500er Packs angefragt, lol. Ich seh euch dann im Spiel, ihr Loser", "Ich sehe, dass die meisten hier gutes schreiben. Stimmt das alles?", "Hi, mein Deutsch ist nicht so gut, krieg ich hier Juwelen?", "Genau, was ich dachte", "Du kannst Reginalds IQ haben und dennoch Juwelen abstauben", "Als ich das erste Mal auf die Seite kam, habe ich wie die meisten von euch erst mal den Chat zugespammt. Letztlich bin ich echt froh, dass ich es versucht habe, denn ich werde jetzt erst mal ein Jahr mein Zimmer nicht mehr verlassen", "Wenn ihr Beweise wollt, addet mich einfach auf Skype", "Ich dachte, Clash Royale stirbt langsam, ich hoffe, diese Veröffentlichung sorgt dafür, dass Spieler zurückkommen", "Danke Dir!", "Bist du nicht gelangweilt? Ich kann die Erweiterung gar nicht erwarten", "Ich suche nach einem Freund, schickt mir bitte eine Nachricht", "Ich dachte erst, mein Freund wollte mich reinlegen mit diesem Link. Aber hier kann man echt Juwelen kriegen, wenn man die Umfrage ordentlich ausfüllt", "Aasdasdasd", "Ok, ich bin zurück, und was soll ich sagen? Ich habe Juwelen bekommen! Ich kann davon keinen Screenshot machen, weil Links im Chat verboten sind, aber versucht es, es funktioniert wirklich", "Hat sich gelohnt, ich habe meine Juwelen bekommen", "Stimmt", "Ich habe jetzt kostenlose Juwelen, wie sieht es mit Dir aus?", "Ich habe es immer schon gehasst, wenn der Release-Termin näher rückt und die dann die Veröffentlichung verschieben", "Von allen Seiten, die ich besucht habe, ist dies die erste und vermutlich auch einzige, die wirklich Juwelen rausgibt", "Ich habe schon bei so vielen Umfragen völlig umsonst mitgemacht, aber diesmal habe ich Glück gehabt", "Juchee, kostenlose Juwelen sind cool!", "Findest Du das gut?", "Was hältst Du davon", "Ich möchte von Korea aus spielen", "Wow, ich habe ewig gewartet, dass der Server transferiert wird, jetzt sollte es keine Probleme mehr geben", "Lol, ProAsh32 ist hier? Du bist unter meinen Skypekontakten! Wie geht's Dir", "Ich habe einige Spielernamen hier überprüft. Das sind echte Menschen... nunja, vielleicht nicht alle.", "Das Geheimnis ist gelüftet", "Funktioniert das auch für Spieler in der EU?", "Hey, ich bin ein Newbie, kann ich das spielen?", "Ich habe mich gerade angemeldet und warte darauf, dass es los geht. Ich hoffe, die starten schneller", "Geht das auch mit meinem Nexus Phone?", "...^^", "Manche Leute sind echt abgefahren", "Juwelen, immer her zu Papa", "Wow, vor 10 Minuten war es hier noch leer, jetzt sind hier all diese Leute, wtf", "Ich mag Clash Royale Go nicht", "Gott sei dank, endlich eine Lösung für Clash Royale", "Das kann ich mir vorstellen", "Ok", "Bin nicht sicher, ob ich das richtig verstanden habe. Es ist kostenlos, richtig?", "Ich wäre so traurig gewesen, wenn es nicht funktioniert hätte, denn es hat einige Zeit gedauert, aber zum Glück hat es funktioniert.", "Ähm", "Man kann also 1.000.000 Pokebälle kaufen?", "Ich glaube, das neue Spiel könnte um einiges interessanter werden", "Abgefahren! Ich hab meine Juwelen!", "Yeah", "Habe die Server getestet, und es funktioniert", "Ich wähle meist das erste Angebot in der Liste, weil es meist das einfachste ist", "Ich glaube, einige der Angebote sind in Ländern wie den USA leichter", "Wenn Du ein Angebot auswählst, musst Du es auf jeden Fall beenden, sonst kriegst Du die Juwelen nicht!"];
var ChatAntiBot = ["Fick Dich, ich bin kein Bot", "Klingt das wie ein Bot, Du Noob?", "Ja, ,lar, wir sind alle Bots, Du Kasper", "Bot? Ich bin hier, um euch voll zu spammen, lol", "Bist du blöd oder was? Die haben hier einen Schutz gegen Bots", "Klar ein Bot, 0101010110 lach mich kaputt xD", "Nein, wir sind keine Bots, Du Eumel"];


$(document).ready(function() {

    $('#X00ChatContent').niceScroll({
        autohidemode: false
    });
    $('#ascrail2000').show();
    ChatStart();
    ChatLog("Welcome to the chatroom, posting links or spamming will result in a kick.");
    ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], ChatContent[rng(0, ChatContent['length'] - 1)]);
    $('#X00InputChat')['keypress'](function(_0xaa63xc) {
        if (_0xaa63xc['keyCode'] == 13) {
            $('#X00ButtonChat')['click']();
        };
    });
    $('#X00ButtonChat')['click'](function() {
        if (ChatUserName == '') {
            $('#X00ContainerChatUserName')['fadeIn'](250);
            $('.X00OverlaySmall').fadeIn(200);
        } else {
            $msg = $('#X00InputChat')['val']();

            ChatAddEntry('<span>' + ChatUserName + '</span>', $msg);
            $('#X00InputChat')['val']('');
            if ($msg.indexOf("bots") >= 0 || $msg.indexOf("bot") >= 0 || $msg.indexOf("robots") >= 0) {
                setTimeout(function() {
                    ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>' + ChatAntiBot[rng(0, ChatAntiBot['length'] - 1)]);
                }, rng(7250, 9300));
            }
            if (!ChatReplied) {
                setTimeout(function() {
                    ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>  lol stop wasting time and take your free Gems');

                    setTimeout(function() {
                        ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>  is this your first time here? this is like the only legit clash royale gems generator out there');
                        setTimeout(function() {
                            ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], 'guys dont listen to ' + '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span> ' + ' he just wants all gems for himself haha');

                        }, rng(11500, 19500));
                    }, rng(6500, 8500));
                }, rng(6000, 9500));
                ChatReplied = true;
            }
        };
    });
    $('#X00ButtonChatUserName')['click'](function() {
        ChatUserName = $('#X00InputChatUserName')['val']();
        $('#X00ContainerChatUserName')['fadeOut'](250, function() {
            $('.X00OverlaySmall').fadeOut(200, function() {
                $('#X00ButtonChat')['click']();
            });
        });
    });


});

Date.prototype.getFullMinutes = function() {
    if (this.getMinutes() < 10) {
        return '0' + this.getMinutes();
    }
    return this.getMinutes();
};

function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}
$(function() {

    $('#X00InputComment').focus(function() {
        $('#X00ContainerAdditional').slideDown(500);
    });
});

function Random(_0xaa63x2, _0xaa63x3) {
    return Math['floor'](Math['random']() * (_0xaa63x3 - _0xaa63x2) + _0xaa63x2);
};

function ChatAddEntry(_0xaa63x5, _0xaa63x6) {
    if (_0xaa63x5 == '' || _0xaa63x6 == '') {
        return;
    };
    $('<div class=\"X00ChatEntry\"><span class=\"X00EntryUserName\">[' + ChatDate.getHours() + ':' + ChatDate.getFullMinutes() + ']  ' + _0xaa63x5 + ':</span><span class=\"X00EntryContent\">' + _0xaa63x6 + '</span></div>')['appendTo']('#X00ChatContent')['hide'](0)['fadeIn'](250);
    $('#X00ChatContent')['scrollTop']($('#X00ChatContent')[0]['scrollHeight']);
};

function ChatLog(_0xaa63x6) {
    $('<div class=\"X00ChatEntry\"><span class=\"ChatNotification\">' + _0xaa63x6 + '</span></div>')['appendTo']('#X00ChatContent')['hide'](0)['fadeIn'](250);
    $('#X00ChatContent')['scrollTop']($('#X00ChatContent')[0]['scrollHeight']);
};

function ChatStart() {
    var _0xaa63x8 = function() {
        setTimeout(function() {
            var _0xaa63x9 = ChatUserNames[Random(0, ChatUserNames['length'] - 1)];
            var _0xaa63xa = ChatContent[Random(0, ChatContent['length'] - 1)];
            ChatAddEntry(_0xaa63x9, _0xaa63xa);
            _0xaa63x8();
        }, Random(1000, 15000));
    };
    _0xaa63x8();
};