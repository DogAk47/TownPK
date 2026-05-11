const appData = {
    baseRegion: {
        id: 'minxiong',
        name: '民雄鄉',
        subtitle: '嘉義縣最大的鄉鎮',
        description: '以農業為主，近年來受惠於工業區與大學城發展，展現出豐富的在地活力與年輕氣息。'
    },
    compareRegion: {
        id: 'chiayi_city',
        name: '嘉義市',
        subtitle: '阿里山下的繁華都心',
        description: '歷史悠久的文化之都，擁有密集的商圈與醫療資源，生活機能極為便利。'
    },
    categories: [
        { id: 'commercial', title: '商圈機能', icon: 'ShoppingBag' },
        { id: 'education', title: '教育資源', icon: 'GraduationCap' },
        { id: 'tourism', title: '觀光資產', icon: 'Map' },
        { id: 'food', title: '在地美食', icon: 'Utensils' },
        { id: 'population', title: '人口密度', icon: 'Users' },
        { id: 'transportation', title: '交通運輸', icon: 'Bus' },
        { id: 'history', title: '歷史沿革', icon: 'Clock' }
    ],
    metrics: {
        commercial: {
            title: '商圈機能與連鎖品牌',
            scores: { minxiong: 75, chiayi_city: 95 },
            minxiong: {
                brands: ['麥當勞', '星巴克', '全聯福利中心 (4家)', '寶雅', '屈臣氏', '康是美'],
                convenienceStores: 35,
                supermarkets: 5,
                gallery: [
                    'https://images.unsplash.com/photo-1555529733-0e670560f8e1?auto=format&fit=crop&w=400&q=80',
                    'https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=400&q=80'
                ]
            },
            chiayi_city: {
                brands: ['好市多', '新光三越', '遠東百貨', '秀泰影城', '麥當勞 (多間)', '星巴克 (多間)'],
                convenienceStores: 120,
                supermarkets: 25,
                gallery: [
                    'https://images.unsplash.com/photo-1519567281027-d15c102c019b?auto=format&fit=crop&w=400&q=80',
                    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&q=80'
                ]
            }
        },
        education: {
            title: '教育與學術資源',
            scores: { minxiong: 85, chiayi_city: 90 },
            minxiong: {
                universities: ['國立中正大學', '國立嘉義大學(民雄校區)', '吳鳳科技大學'],
                highSchools: 2,
                middleSchools: 2,
                elementarySchools: 9,
                totalSchools: 16,
                features: '擁有高密度大專院校，學術氛圍濃厚，帶動周邊租屋與餐飲商機。',
                gallery: [
                    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=400&q=80',
                    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80'
                ]
            },
            chiayi_city: {
                universities: ['國立嘉義大學(蘭潭/新民/林森校區)'],
                highSchools: 14,
                middleSchools: 8,
                elementarySchools: 20,
                totalSchools: 43,
                features: '百年名校林立，基礎教育資源極其豐富，是周邊鄉鎮學子首選的就學區域。',
                gallery: [
                    'https://images.unsplash.com/photo-1498075702571-ecb018f3752d?auto=format&fit=crop&w=400&q=80',
                    'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80'
                ]
            }
        },
        tourism: {
            title: '觀光與文化資產',
            scores: { minxiong: 80, chiayi_city: 88 },
            minxiong: {
                gallery: [
                    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80',
                    'https://images.unsplash.com/photo-1550828520-4cb496926fc9?auto=format&fit=crop&w=400&q=80'
                ],
                spots: [
                    { name: '民雄鬼屋 (劉家古厝)', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80', desc: '著名歷史建築與靈異傳說' },
                    { name: '旺萊山鳳梨文化園區', image: 'https://images.unsplash.com/photo-1550828520-4cb496926fc9?auto=format&fit=crop&w=400&q=80', desc: '鳳梨酥與廣大鳳梨田' },
                    { name: '國家廣播文物館', image: 'https://images.unsplash.com/photo-1593697972646-2f348871478c?auto=format&fit=crop&w=400&q=80', desc: '日治時期歷史建築' },
                    { name: '中正大學校園', image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=400&q=80', desc: '偶像劇取景勝地' }
                ]
            },
            chiayi_city: {
                gallery: [
                    'https://images.unsplash.com/photo-1583315891465-b1ab1382fc17?auto=format&fit=crop&w=400&q=80',
                    'https://images.unsplash.com/photo-1621361510425-635e6cbf5dfa?auto=format&fit=crop&w=400&q=80'
                ],
                spots: [
                    { name: '檜意森活村', image: 'https://images.unsplash.com/photo-1583315891465-b1ab1382fc17?auto=format&fit=crop&w=400&q=80', desc: '全台最大日式建築群' },
                    { name: '阿里山林業鐵路車庫園區', image: 'https://images.unsplash.com/photo-1621361510425-635e6cbf5dfa?auto=format&fit=crop&w=400&q=80', desc: '歷史鐵道文物' },
                    { name: '嘉義市立美術館', image: 'https://images.unsplash.com/photo-1605809744158-b6158229f34f?auto=format&fit=crop&w=400&q=80', desc: '融合古蹟與現代的藝術空間' },
                    { name: '蘭潭風景區', image: 'https://images.unsplash.com/photo-1601053427976-508b5e630800?auto=format&fit=crop&w=400&q=80', desc: '美麗湖光水色與水舞' }
                ]
            }
        },
        food: {
            title: '在地特色美食',
            scores: { minxiong: 82, chiayi_city: 92 },
            minxiong: {
                gallery: [
                    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80',
                    'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=400&q=80'
                ],
                spots: [
                    { name: '民雄鵝肉街', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80', desc: '火車站前著名鵝肉商圈' },
                    { name: '肉包', image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=400&q=80', desc: '在地知名手工肉包' },
                    { name: '椪皮麵', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=400&q=80', desc: '傳統古早味小吃' }
                ]
            },
            chiayi_city: {
                gallery: [
                    'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=400&q=80',
                    'https://images.unsplash.com/photo-1548943487-a2e4f43b4850?auto=format&fit=crop&w=400&q=80'
                ],
                spots: [
                    { name: '火雞肉飯', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=400&q=80', desc: '嘉義最具代表性美食' },
                    { name: '沙鍋魚頭', image: 'https://images.unsplash.com/photo-1548943487-a2e4f43b4850?auto=format&fit=crop&w=400&q=80', desc: '文化路夜市排隊名店' },
                    { name: '涼麵 (加美乃滋)', image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=400&q=80', desc: '嘉義特有白醋涼麵' }
                ]
            }
        },
        population: {
            title: '人口密度與居住概況',
            scores: { minxiong: 88, chiayi_city: 85 },
            minxiong: {
                totalPopulation: 70000,
                area: 85.49,
                density: 818, // 人/平方公里
                households: 25120,
                villages: 28,
                neighborhoods: 432,
                growthTrend: '穩定',
                housingCost: '親民',
                gallery: [
                    'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=400&q=80',
                    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80'
                ]
            },
            chiayi_city: {
                totalPopulation: 263000,
                area: 60.02,
                density: 4381, // 人/平方公里
                households: 104500,
                villages: 84,
                neighborhoods: 1374,
                growthTrend: '微幅下降',
                housingCost: '偏高',
                gallery: [
                    'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=400&q=80',
                    'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=400&q=80'
                ]
            }
        },
        transportation: {
            title: '交通運輸與路網',
            scores: { minxiong: 78, chiayi_city: 95 },
            minxiong: {
                trainStations: ['民雄車站 (三等站)'],
                highways: ['國道一號民雄交流道', '國道三號竹崎交流道(鄰近)', '台1線'],
                mapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=120.4000%2C23.5300%2C120.4600%2C23.5800&layer=mapnik',
                gallery: [
                    'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&w=400&q=80',
                    'https://images.unsplash.com/photo-1563290673-cdbde18742df?auto=format&fit=crop&w=400&q=80'
                ]
            },
            chiayi_city: {
                trainStations: ['嘉義車站 (一等站)', '嘉北車站'],
                highways: ['國道一號嘉義交流道', '國道三號中埔交流道(鄰近)', '台1線', '台18線(阿里山公路)'],
                mapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=120.4100%2C23.4500%2C120.4800%2C23.5100&layer=mapnik',
                gallery: [
                    'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=400&q=80',
                    'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=400&q=80'
                ]
            }
        },
        history: {
            title: '行政區歷史演變',
            scores: { minxiong: 80, chiayi_city: 95 },
            minxiong: {
                gallery: [
                    'https://images.unsplash.com/photo-1505528636733-14631336c53c?auto=format&fit=crop&w=400&q=80',
                    'https://images.unsplash.com/photo-1498075702571-ecb018f3752d?auto=format&fit=crop&w=400&q=80'
                ],
                timeline: [
                    { year: '1920', event: '臺灣地方改制，設立「民雄庄」，隸屬臺南州嘉義郡管轄。' },
                    { year: '1945', event: '二戰後改稱「民雄鄉」，隸屬臺南縣嘉義區。' },
                    { year: '1950', event: '行政區域調整，改隸嘉義縣至今。' },
                    { year: '2010', event: '中正大學等學術機構進駐帶動地方發展，形成大學城商圈。' },
                    { year: '2024', event: '積極推動農工雙引擎發展，為嘉義縣人口最多的鄉鎮。' }
                ]
            },
            chiayi_city: {
                gallery: [
                    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80',
                    'https://images.unsplash.com/photo-1605809744158-b6158229f34f?auto=format&fit=crop&w=400&q=80'
                ],
                timeline: [
                    { year: '1920', event: '設立「嘉義街」，1930年升格為「嘉義市」，直屬臺南州。' },
                    { year: '1945', event: '升格為省轄市。' },
                    { year: '1950', event: '降格為縣轄市，隸屬嘉義縣，為縣治所在。' },
                    { year: '1982', event: '恢復為省轄市，與嘉義縣分治。' },
                    { year: '2024', event: '持續發展為雲嘉南地區的核心醫療與消費中心。' }
                ]
            }
        }
    }
};
