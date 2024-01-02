const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://anilrai4001:anilrai4001@cluster0.qdscemp.mongodb.net/musicart?retryWrites=true&w=majority');

const Product = require('./models/Product')

const products = [
    {
        "name": 'Sony WH-CH720N',
        "fullName": 'Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support, AUX & Voice Assistant Support for Mobile Phones (Black)',
        "brand": 'Sony',
        "price": 3500,
        "type": 'featured',
        "color": 'blue',
        'about': [
            `Sony’s lightest Wireless Noise - cancelling headband ever`,
            `Up to 50 - hour battery life with quick charging(3 min charge for up to 1 hour of playback)`,
            `Multi - Point Connection helps to pair with two Bluetooth devices at the same time`,
            `Take noise cancelling to the next level with Sony’s`,
            `Integrated Processor V1, so you can fully immerse yourself in the music`,
            `Super comfortable and lightweight design (192 Grams)`,
            `High sound quality and well - balanced sound tuning`
        ],
        'available': 'In stock',
        'images':[
            'https://rukminim2.flixcart.com/image/416/416/kltryq80/headphone/4/s/h/tbs-3303-02-fg-turtle-beach-original-imagyv8n4wkxczkc.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/kltryq80/headphone/0/s/o/tbs-3303-02-fg-turtle-beach-original-imagyv8nqm3jpbag.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/kltryq80/headphone/b/y/e/tbs-3303-02-fg-turtle-beach-original-imagyv8nsdbawvtz.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/kltryq80/headphone/n/o/z/tbs-3303-02-fg-turtle-beach-original-imagyv8nbnhgpwzt.jpeg?q=70'
        ]
    },

    {
        "name": "Samsung Galaxy Buds Pro",
        "fullName": "Samsung Galaxy Buds Pro, True Wireless Earbuds with Intelligent Active Noise Cancellation, 360 Audio, Water Resistance, and Touch Controls (Phantom Black)",
        "brand": "Samsung",
        "price": 1999,
        "type": "featured",
        "color": "black",
        "about": [
            "Intelligent Active Noise Cancellation for immersive audio experience",
            "360 Audio for a surround sound effect",
            "Water-resistant design for added durability",
            "Touch controls for easy navigation",
            "Long-lasting battery life"
        ],
        "available": "In stock",
        'images': [
            'https://rukminim2.flixcart.com/image/416/416/kd1zngw0/headphone/m/y/z/k812-pro-akg-original-imafuf2gkrjb6gv2.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/kd1zngw0/headphone/p/p/o/k812-pro-akg-original-imafuf2gews2e63q.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/kd1zngw0/headphone/y/d/c/k812-pro-akg-original-imafuf2gbxcgmbxg.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/kd1zngw0/headphone/l/m/j/k812-pro-akg-original-imafuf2gneab56d7.jpeg?q=70'
        ]
    },
    {
        "name": "Bose QuietComfort 35 II",
        "fullName": "Bose QuietComfort 35 II, Wireless Bluetooth Over-Ear Headphones with Noise-Cancelling, Alexa Voice Control, and Built-in Microphone (Silver)",
        "brand": "Bose",
        "price": 2999,
        "type": "over-ear",
        "color": "black",
        "about": [
            "World-class noise cancellation for a better listening experience",
            "Alexa voice control for hands-free operation",
            "Dual-microphone system for clear calls",
            "Wireless Bluetooth technology for easy connectivity",
            "Long-lasting battery life"
        ],
        "available": "In stock",
        'images':[
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/z/f/p/eh2-eksa-original-imagrrxcv4y8rezw.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/y/h/y/eh2-eksa-original-imagrrxcwu9n3ym5.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/3/f/j/eh2-eksa-original-imagrrxcgtgzeabf.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/h/y/6/eh2-eksa-original-imagrrxcugbhfqta.jpeg?q=70'
        ]
    },
    {
        "name": "JBL Flip 5",
        "fullName": "JBL Flip 5, Portable Waterproof Bluetooth Speaker with 12 Hours Playtime, PartyBoost, and USB-C Charging (Squad)",
        "brand": "JBL",
        "price": 995,
        "type": "over-ear",
        "color": "black",
        "about": [
            "Waterproof design for worry-free use by the pool or at the beach",
            "12 hours of playtime for extended listening sessions",
            "PartyBoost feature for connecting multiple speakers",
            "USB-C charging for quick and convenient power",
            "Compact and portable design"
        ],
        "available": "In stock",
        'images':[
            'https://rukminim2.flixcart.com/image/416/416/kz4gh3k0/headphone/y/q/v/-original-imagb7g9h6cfxfh9.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/kz4gh3k0/headphone/y/s/t/-original-imagb7g9szzygqbz.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/kz4gh3k0/headphone/l/6/o/-original-imagb7g9ymnf94g6.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/kz4gh3k0/headphone/g/a/u/-original-imagb7g9gutbgscr.jpeg?q=70'
        ]
    },
    {
        "name": "Boat Airdopes Pro",
        "fullName": "Boat Airdopes Pro, Noise-Cancelling True Wireless Earbuds with Transparency Mode and Wireless Charging Case (White)",
        "brand": "Boat",
        "price": 24900,
        "type": "over-ear",
        "color": "black",
        "about": [
            "Active Noise Cancellation for immersive sound",
            "Transparency mode for hearing the world around you",
            "Wireless charging case for convenience",
            "Sweat and water-resistant design",
            "Easy setup and seamless switching between devices"
        ],
        "available": "In stock",
        'images':[
            'https://rukminim2.flixcart.com/image/416/416/kq9ta4w0/headphone/e/y/v/rockerz-650-boat-original-imag4bfgjygmfbz6.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/x/g/x/-original-imagg33vneqg3dzp.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/v/g/c/-original-imagg33vavtkfgbp.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/f/5/k/-original-imagg33vfxrmrm7j.jpeg?q=70'
        ]
    },
    {
        "name": "Sony SRS-XB43",
        "fullName": "Sony SRS-XB43, Extra Bass Portable Bluetooth Speaker with 24 Hours Battery Life, Party Lights, and Waterproof Design (Black)",
        "brand": "Sony",
        "price": 24999,
        "type": "over-ear",
        "color": "black",
        "about": [
            "Extra Bass for deep and punchy sound",
            "24 hours of battery life for all-day listening",
            "Party lights for a festive atmosphere",
            "Waterproof design for worry-free use outdoors",
            "Durable and rugged build"
        ],
        "available": "In stock",
        'images':[
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/i/e/c/ranger-hx300-bluetooth-gaming-headphones-with-50ms-low-latency-original-imagjs4zfdhzzrgj.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/s/v/x/ranger-hx300-bluetooth-gaming-headphones-with-50ms-low-latency-original-imagjhm94bw4nuzp.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/h/a/v/ranger-hx300-bluetooth-gaming-headphones-with-50ms-low-latency-original-imagjhm9q9suyvfc.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/a/n/w/ranger-hx300-bluetooth-gaming-headphones-with-50ms-low-latency-original-imagjhm9vynegt7n.jpeg?q=70'
        ]
    },
    {
        "name": "pTron HD 660 S",
        "fullName": "pTron HD 660 S, Open-Back Professional Headphones with Low Impedance and Detachable Cable (Matte Black)",
        "brand": "pTron",
        "price": 499,
        "type": "on-ear",
        "color": "black",
        "about": [
            "Professional-grade open-back design for accurate sound reproduction",
            "Low impedance for use with a variety of devices",
            "Detachable cable for convenience and customization",
            "Ergonomic and comfortable fit for long listening sessions",
            "High-quality materials for durability"
        ],
        "available": "In stock",
        'images':[
            'https://rukminim2.flixcart.com/image/416/416/jt4olu80/headphone/z/w/a/sennheiser-hd-820-original-imafejyjxvfea9ah.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/jt4olu80/headphone/z/w/a/sennheiser-hd-820-original-imafejyjfwmrgzv6.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/jt4olu80/headphone/z/w/a/sennheiser-hd-820-original-imafejyjrztjjscg.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/jt4olu80/headphone/z/w/a/sennheiser-hd-820-original-imafejyj3yer6epg.jpeg?q=70'
        ]
    },
    {
        "name": "JBL Crusher ANC",
        "fullName": "JBL Crusher ANC, Over-Ear Wireless Headphones with Active Noise Cancellation, Adjustable Bass, and Personal Sound (Deep Red)",
        "brand": "JBL",
        "price": 319,
        "type": "featured",
        "color": "blue",
        "about": [
            "Over-ear wireless headphones with active noise cancellation",
            "Adjustable bass for a customizable audio experience",
            "Personal Sound technology for tailored listening profiles",
            "Up to 24 hours of battery life for extended use",
            "Plush memory foam ear cushions for comfort during long sessions",
            "Bluetooth connectivity for seamless pairing with devices",
            "Intuitive on-ear controls for easy operation",
            "Collapsible design for convenient storage and portability"
        ],
        "available": "In stock",
        'images':[
            'https://rukminim2.flixcart.com/image/416/416/k73nlow0/headphone/w/2/v/fire-boltt-bh1000-over-ear-with-foldable-earmuffs-20-hours-original-imafpf9zc4rshyhm.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/k73nlow0/headphone/w/2/v/fire-boltt-bh1000-over-ear-with-foldable-earmuffs-20-hours-original-imafpf9zxg9jb6wk.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/k73nlow0/headphone/w/2/v/fire-boltt-bh1000-over-ear-with-foldable-earmuffs-20-hours-original-imafpf9zm8ymvg9a.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/k73nlow0/headphone/w/2/v/fire-boltt-bh1000-over-ear-with-foldable-earmuffs-20-hours-original-imafpf9zmtpudbfv.jpeg?q=70'
        ]
    },
    {
        "name": "Marshall Solo Pro",
        "fullName": "Marshall Solo Pro, Wireless On-Ear Headphones with Active Noise Cancellation, H1 Headphone Chip, and Foldable Design (Dark Blue)",
        "brand": "Marshall",
        "price": 2905,
        "type": "on-ear",
        "color": "blue",
        "about": [
            "Active Noise Cancellation for an immersive listening experience",
            "H1 Headphone Chip for seamless connectivity",
            "Foldable design for easy portability",
            "On-ear controls for convenient operation",
            "Up to 22 hours of battery life"
        ],
        "available": "In stock",
        'images':[
            'https://rukminim2.flixcart.com/image/416/416/l3xcr680/headphone/v/z/h/monitor-ii-anc-marshall-original-imagexrbay3tfswq.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/l3xcr680/headphone/1/o/a/monitor-ii-anc-marshall-original-imagexrbk8wxzyqh.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/l3xcr680/headphone/u/6/f/monitor-ii-anc-marshall-original-imagexrbzng2feeu.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/l3xcr680/headphone/0/t/0/monitor-ii-anc-marshall-original-imagexrbtz2buyey.jpeg?q=70'
        ]
    },
    {
        "name": "Marshall Soundcore Liberty Air 2 Pro",
        "fullName": "Marshall Soundcore Liberty Air 2 Pro, True Wireless Earbuds with Targeted Active Noise Cancellation, HearID Personalized Sound, and Wireless Charging (Titanium White)",
        "brand": "Marshall",
        "price": 1299,
        "type": "featured",
        "color": "black",
        "about": [
            "Targeted Active Noise Cancellation for a customized experience",
            "HearID Personalized Sound for tailored audio",
            "Wireless charging for added convenience",
            "Touch controls for easy operation",
            "Up to 26 hours of playtime"
        ],
        "available": "In stock",
        'images':[
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/4/p/t/-original-imagwfua2zwthjjg.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/c/d/4/-original-imagwfuacbabazkg.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/o/x/t/-original-imagwfuayecn7hf6.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/i/i/n/-original-imagwfuaqnnggzug.jpeg?q=70'
        ]
    },
    {
        "name": "Elite 85t",
        "fullName": "Elite 85t, True Wireless Earbuds with Advanced Noise Cancellation, Adjustable Sound, and 25 Hours Battery Life (Copper Black)",
        "brand": "featured",
        "price": 22999,
        "type": "on-ear",
        "color": "black",
        "about": [
            "Advanced Noise Cancellation for a quiet listening experience",
            "Adjustable Sound for personalized audio profiles",
            "Up to 25 hours of battery life with the charging case",
            "Compact and comfortable design",
            "IPX4-rated for water and dust resistance"
        ],
        "available": "In stock",
        'images':[
            'https://rukminim2.flixcart.com/image/416/416/kdeum4w0/headphone/c/k/o/pro-50-oneodio-original-imafuazz3j52zyug.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/kdbzqfk0/headphone/s/m/4/pro-50-oneodio-original-imafu9gkmyryjuhq.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/kdbzqfk0/headphone/w/y/2/pro-50-oneodio-original-imafu9gkagzezuzx.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/kdbzqfk0/headphone/j/m/y/pro-50-oneodio-original-imafu9gkcf3yntvz.jpeg?q=70'
        ]
    },
    {
        "name": "Audio-Technica ATH-M50x",
        "fullName": "Audio-Technica ATH-M50x, Professional Studio Monitor Headphones with Detachable Cable and Exceptional Clarity (Black)",
        "brand": "featured",
        "price": 1490,
        "type": "on-ear",
        "color": "white",
        "about": [
            "Professional studio monitor headphones for accurate audio reproduction",
            "Detachable cable for easy replacement and customization",
            "Exceptional clarity and sound isolation",
            "Collapsible design for portability",
            "Comfortable over-ear fit"
        ],
        "available": "In stock",
        'images':[
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/a/m/x/wh-g700-sony-original-imagg6bfapnuhdnj.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/a/i/k/wh-g700-sony-original-imagg6bfs4dhkmj5.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/c/o/i/-original-imagj85kxzygqeu7.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/s/e/x/wh-g700-sony-original-imagg6bfjbfzkhst.jpeg?q=70'
        ]
    },
    {
        "name": "Sony WF-1000XM4",
        "fullName": "Sony WF-1000XM4, Industry Leading Noise Canceling Truly Wireless Earbud Headphones with Alexa Built-in, Touch Control, and 8 Hours Battery Life (Black)",
        "brand": "Sony",
        "price": 2799,
        "type": "in-ear",
        "color": "black",
        "about": [
            "Industry-leading noise cancellation for a distraction-free experience",
            "Alexa Built-in for voice control and hands-free operation",
            "Touch controls for easy navigation",
            "Up to 8 hours of battery life with additional charges from the case",
            "High-quality audio and comfortable fit"
        ],
        "available": "In stock",
        'images':[
            'https://rukminim2.flixcart.com/image/416/416/kyj0vbk0/headphone/q/v/g/taa4216bk-wireless-sports-headphone-ip55-dustwater-protection-original-imagaqj6uez8yzd5.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/kyj0vbk0/headphone/1/b/p/taa4216bk-wireless-sports-headphone-ip55-dustwater-protection-original-imagaqj6juvctp2r.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/kyj0vbk0/headphone/7/l/n/taa4216bk-wireless-sports-headphone-ip55-dustwater-protection-original-imagaqj6yyqhuzp8.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/kyj0vbk0/headphone/v/c/b/taa4216bk-wireless-sports-headphone-ip55-dustwater-protection-original-imagaqj6fahdnaxr.jpeg?q=70'
        ]
    },
    {
        "name": "Bose SoundLink Revolve+",
        "fullName": "Bose SoundLink Revolve+, Portable Bluetooth Speaker with 360 Wireless Surround Sound, Water Resistant, and Long Battery Life (Triple Black)",
        "brand": "Bose",
        "price": 29900,
        "type": "in-ear",
        "color": "black",
        "about": [
            "360 wireless surround sound for an immersive listening experience",
            "Water-resistant design for outdoor use",
            "Long battery life for extended playtime",
            "Portable and easy to carry with a flexible handle",
            "Bluetooth connectivity for seamless pairing"
        ],
        "available": "In stock",
        'images':[
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/q/s/z/d-808-806-with-stereo-bass-sound-40hrs-playback-with-premium-box-original-imagj4w8gtjhgsyg.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/l/u/u/d-808-806-with-stereo-bass-sound-40hrs-playback-with-premium-box-original-imagj4w8tywwvdmm.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/m/z/s/d-808-806-with-stereo-bass-sound-40hrs-playback-with-premium-box-original-imagj4w8dyk6grcj.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/q/l/a/d-808-806-with-stereo-bass-sound-40hrs-playback-with-premium-box-original-imagj4w8em32vk5u.jpeg?q=70'
        ]
    },
    {
        "name": "Boat Arctis 7",
        "fullName": "Boat Arctis 7, Lossless Wireless Gaming Headset with DTS Headphone:X v2.0 Surround, and ClearCast Noise Cancelling Microphone (Black)",
        "brand": "Boat",
        "price": 14999,
        "type": "in-ear",
        "color": "black",
        "about": [
            "Lossless wireless audio for a high-quality gaming experience",
            "DTS Headphone:X v2.0 Surround for immersive sound",
            "ClearCast noise-canceling microphone for clear communication",
            "Long-lasting battery life for extended gaming sessions",
            "Comfortable and adjustable fit"
        ],
        "available": "In stock",
        'images':[
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/i/f/t/-original-imagpx6phaztytdy.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/e/s/r/-original-imagpx6ptyvyjczy.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/f/g/k/-original-imagpx6phfqtf4hk.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/r/h/i/-original-imagpx6pdjzhmhf9.jpeg?q=70'
        ]
    },
    {
        "name": "pTron Ultimate Ears BOOM 3",
        "fullName": "pTron Ultimate Ears BOOM 3, Portable Waterproof Bluetooth Speaker with 360-Degree Sound, Deep Bass, and Magic Button (Night Black)",
        "brand": "pTron",
        "price": 1499,
        "type": "in-ear",
        "color": "black",
        "about": [
            "360-degree sound for a party atmosphere",
            "Deep bass for a rich audio experience",
            "Portable and waterproof design for outdoor use",
            "Magic Button for easy music control",
            "Up to 15 hours of battery life"
        ],
        "available": "In stock",
        'images':[
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/8/e/p/-original-imaghj3ffnmbhybd.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/5/c/u/-original-imaghj3f5znsgs9x.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/z/6/x/-original-imaghj3fpswptzr5.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/p/f/x/-original-imaghj3f2ghu2n3w.jpeg?q=70'
        ]
    },
    {
        "name": "Apple BlackShark V2 Pro",
        "fullName": "Apple BlackShark V2 Pro, Wireless Gaming Headset with THX 7.1 Surround Sound, Detachable Mic, and HyperSpeed Wireless Technology (Black)",
        "brand": "Apple",
        "price": 1799,
        "type": "in-ear",
        "color": "white",
        "about": [
            "THX 7.1 Surround Sound for immersive gaming audio",
            "Detachable mic for versatile use",
            "HyperSpeed Wireless Technology for lag-free performance",
            "Ultra-soft breathable memory foam cushions for comfort",
            "Up to 24 hours of battery life"
        ],
        "available": "In stock",
        'images':[
            'https://rukminim2.flixcart.com/image/416/416/kigbjbk0-0/headphone/v/g/z/mgyj3hn-a-apple-original-imafy8whg2wxcygt.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/kigbjbk0-0/headphone/d/s/t/mgyj3hn-a-apple-original-imafy8whfhhthw8b.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/kigbjbk0-0/headphone/b/9/e/mgyj3hn-a-apple-original-imafy8whbghhfuge.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/kigbjbk0-0/headphone/4/u/h/mgyj3hn-a-apple-original-imafy8whmspajzsa.jpeg?q=70'
        ]
    },
    {
        "name": "JBL LIVE 650BTNC",
        "fullName": "JBL LIVE 650BTNC, Wireless Over-Ear Noise-Cancelling Headphones with Voice Assistant and Ambient Aware Technology (Blue)",
        "brand": "JBL",
        "price": 19995,
        "type": "featured",
        "color": "blue",
        "about": [
            "Wireless over-ear design with noise cancellation for immersive sound",
            "Voice assistant for hands-free control",
            "Ambient Aware Technology for awareness of surroundings",
            "Foldable design for easy storage",
            "Up to 20 hours of battery life"
        ],
        "available": "In stock",
        'images':[
            'https://rukminim2.flixcart.com/image/416/416/ki3gknk0/headphone/i/m/v/cassette-wireless-skullcandy-original-imafxyhjfmru9m9a.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/ki3gknk0/headphone/0/y/t/cassette-wireless-skullcandy-original-imafxyhjqffbgf75.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/l12h1u80/headphone/y/4/h/-original-imagcpzcczmywypd.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/ki3gknk0/headphone/c/6/g/cassette-wireless-skullcandy-original-imafxyhjzwqgtgjs.jpeg?q=70'
        ]
    },
    {
        "name": "Marshall Pro",
        "fullName": "Marshall Pro, True Wireless Earbuds with Adaptive Noise Cancellation, Warp Charge, and Dolby Atmos (Silver)",
        "brand": "Marshall",
        "price": 49999,
        "type": "in-ear",
        "color": "black",
        "about": [
            "Adaptive Noise Cancellation for a personalized audio experience",
            "Warp Charge for quick and convenient charging",
            "Dolby Atmos for immersive sound",
            "Intuitive touch controls for easy operation",
            "Up to 38 hours of battery life with the charging case"
        ],
        "available": "In stock",
        'images':[
            'https://rukminim2.flixcart.com/image/416/416/krf91u80/headphone/5/a/1/h-151-logitech-original-imag582qxpwnwczh.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/krf91u80/headphone/h/v/r/h-151-logitech-original-imag582q9hzuz9fv.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/krf91u80/headphone/s/a/q/h-151-logitech-original-imag582qcgymre5a.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/krf91u80/headphone/e/m/s/h-151-logitech-original-imag582qnmcysft7.jpeg?q=70'
        ]
    },
    {
        "name": "Marshall Beoplay H9",
        "fullName": "Marshall Beoplay H9, Wireless Over-Ear Headphones with Active Noise Cancellation, Touch Controls, and Luxurious Design (Argilla Bright)",
        "brand": "Marshall",
        "price": 49900,
        "type": "in-ear",
        "color": "featured",
        "about": [
            "Wireless over-ear headphones with luxurious design",
            "Active Noise Cancellation for a serene listening experience",
            "Intuitive touch controls for easy operation",
            "Up to 25 hours of battery life",
            "High-quality materials for a premium feel"
        ],
        "available": "In stock",
        'images':[
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/y/x/y/-original-imagz2d8fkkf5vme.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/a/r/s/-original-imagz2d8wrjpvwfq.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/b/a/m/-original-imagz2d8fjrcy5sy.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/v/j/k/-original-imagz2d8nfskxzhb.jpeg?q=70'
        ]
    },


]

products.map((product)=>Product.create(product));