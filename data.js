const UPGRADE_DATA = {
  "levels": [
    "無/Naone",
    "良好/Uncommon",
    "良好1星/Uncommon(1-Star)",
    "稀有/Rare",
    "稀有1星/Rare(1-Star)",
    "稀有2星/Rare(2-Star)",
    "稀有3星/Rare(3-Star)",
    "史詩/Epic",
    "史詩1星/Epic(1-Star)",
    "史詩2星/Epic(2-Star)",
    "史詩3星Epic(3-Star)",
    "史詩T1/EpicT1",
    "史詩T1-1星/EpicT1(1-Star)",
    "史詩T1-2星/EpicT1(2-Star)",
    "史詩T1-3星/EpicT1(3-Star)",
    "傳說/Mythic",
    "傳說1星/Mythic(1-Star)",
    "傳說2星/Mythic(2-Star)",
    "傳說3星/Mythic(3-Star)",
    "傳說T1/MythicT1",
    "傳說T1-1星/MythicT1(1-Star)",
    "傳說T1-2星/MythicT1(2-Star)",
    "傳說T1-3星/MythicT1(3-Star)",
    "傳說T2/MythicT2",
    "傳說T2-1星/MythicT2(1-Star)",
    "傳說T2-2星/MythicT2(2-Star)",
    "傳說T2-3星/MythicT2(3-Star)",
    "神話/Legendary",
    "神話1星/Legendary(1-Star)",
    "神話2星/Legendary(2-Star)",
    "神話3星/Legendary(3-Star)",
    "神話T1/LegendaryT1",
    "神話T1-1星/LegendaryT1(1-Star)",
    "神話T1-2星/LegendaryT1(2-Star)",
    "神話T1-3星/LegendaryT1(3-Star)",
    "神話T2/LegendaryT2",
    "神話T2-1星/LegendaryT2(1-Star)",
    "神話T2-2星/LegendaryT2(2-Star)",
    "神話T2-3星/LegendaryT2(3-Star)",
    "神話T3/LegendaryT3",
    "神話T3-1星/LegendaryT3(1-Star)",
    "神話T3-2星/LegendaryT3(2-Star)",
    "神話T3-3星/LegendaryT3(3-Star)",
    "神話T3-3星-1/LegendaryT3(3-Star)-1",
    "神話T3-3星-2/LegendaryT3(3-Star)-2",
    "神話T3-3星-3/LegendaryT3(3-Star)-3",
    "神話T3-3星-4/LegendaryT3(3-Star)-4",
    "神話T4/LegensaryT4",
    "-神話T4-1/-LegensaryT4-1",
    "神話T4-1/LegensaryT4-1",
    "-神話T4-2/-LegensaryT4-2",
    "神話T4-2/LegensaryT4-2",
    "神話T4-3/LegensaryT4-3",
    "-神話T4-4/-LegensaryT4-4",
    "神話T4-4/LegensaryT4-4",
    "-神話T4-1星/-LegensaryT4(1-Star)",
    "神話T4-1星/LegensaryT4(1-Star)",
    "神話T4-1星-1/LegensaryT4(1-Star)-1",
    "神話T4-1星-2/LegensaryT4(1-Star)-2",
    "神話T4-1星-3/LegensaryT4(1-Star)-3",
    "神話T4-1星-4/LegensaryT4(1-Star)-4",
    "神話T4-2星/LegensaryT4(2-Star)",
    "神話T4-2星-1/LegensaryT4(2-Star)-1",
    "神話T4-2星-2/LegensaryT4(2-Star)-2",
    "神話T4-2星-3/LegensaryT4(2-Star)-3",
    "神話T4-2星-4/LegensaryT4(2-Star)-4",
    "神話T4-3星/LegensaryT4(3-Star)"
  ],
  "materials": [
    "強韌合金/Hardened Alloy",
    "拋光液/Polishing Solution",
    "設計圖紙/Design Plans",
    "月光琥珀/Lunar Amber"
  ],
  "transitions": [
    {
      "from": "無/Naone",
      "to": "良好/Uncommon",
      "costs": {
        "強韌合金/Hardened Alloy": 1500,
        "拋光液/Polishing Solution": 15,
        "設計圖紙/Design Plans": 0,
        "月光琥珀/Lunar Amber": 0
      }
    },
    {
      "from": "良好/Uncommon",
      "to": "良好1星/Uncommon1星",
      "costs": {
        "強韌合金/Hardened Alloy": 3800,
        "拋光液/Polishing Solution": 40,
        "設計圖紙/Design Plans": 0,
        "月光琥珀/Lunar Amberr": 0
      }
    },
    {
      "from": "良好1星/Uncommon1星",
      "to": "稀有/Rare",
      "costs": {
        "強韌合金/Hardened Alloy合金": 7000,
        "拋光液/Polishing Solution": 70,
        "設計圖紙/Design Plans": 0,
        "月光琥珀/Lunar Amber": 0
      }
    },
    {
      "from": "稀有/Rare",
      "to": "稀有1星/Rare(1-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 9700,
        "拋光液/Polishing Solution": 95,
        "設計圖紙/Design Plans": 0,
        "月光琥珀/Lunar Amber": 0
      }
    },
    {
      "from": "稀有1星/Rare(1-Star)",
      "to": "稀有2星/Rare(2-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 0,
        "拋光液/Polishing Solution": 0,
        "設計圖紙/Design Plans": 45,
        "月光琥珀/Lunar Amber": 0
      }
    },
    {
      "from": "稀有2星/Rare(2-Star)",
      "to": "稀有3星/Rare(3-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 0,
        "拋光液/Polishing Solution": 0,
        "設計圖紙/Design Plans": 50,
        "月光琥珀/Lunar Amber": 0
      }
    },
    {
      "from": "稀有3星/Rare(3-Star)",
      "to": "史詩/Epic",
      "costs": {
        "強韌合金/Hardened Alloy": 0,
        "拋光液/Polishing Solution": 0,
        "設計圖紙/Design Plans": 60,
        "月光琥珀/Lunar Amber": 0
      }
    },
    {
      "from": "史詩/Epic",
      "to": "史詩1星/Epic(1-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 0,
        "拋光液/Polishing Solution": 0,
        "設計圖紙/Design Plans": 70,
        "月光琥珀/Lunar Amber": 0
      }
    },
    {
      "from": "史詩1星/Epic(1-Star)",
      "to": "史詩2星/Epic(2-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 6500,
        "拋光液/Polishing Solution": 65,
        "設計圖紙/Design Plans": 40,
        "月光琥珀/Lunar Amber": 0
      }
    },
    {
      "from": "史詩2星/Epic(2-Star)",
      "to": "史詩3星Epic(3-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 8000,
        "拋光液/Polishing Solution": 80,
        "設計圖紙/Design Plans": 50,
        "月光琥珀/Lunar Amber": 0
      }
    },
    {
      "from": "史詩3星Epic(3-Star)",
      "to": "史詩T1/EpicT1",
      "costs": {
        "強韌合金/Hardened Alloy": 10000,
        "拋光液/Polishing Solution": 95,
        "設計圖紙/Design Plans": 60,
        "月光琥珀/Lunar Amber": 0
      }
    },
    {
      "from": "史詩T1/EpicT1",
      "to": "史詩T1-1星/EpicT1(1-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 11000,
        "拋光液/Polishing Solution": 110,
        "設計圖紙/Design Plans": 70,
        "月光琥珀/Lunar Amber": 0
      }
    },
    {
      "from": "史詩T1-1星/EpicT1(1-Star)",
      "to": "史詩T1-2星/EpicT1(2-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 13000,
        "拋光液/Polishing Solution": 130,
        "設計圖紙/Design Plans": 85,
        "月光琥珀/Lunar Amber": 0
      }
    },
    {
      "from": "史詩T1-2星/EpicT1(2-Star)",
      "to": "史史詩T1-3星/EpicT1(3-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 15000,
        "拋光液/Polishing Solution": 160,
        "設計圖紙/Design Plans": 100,
        "月光琥珀/Lunar Amber": 0
      }
    },
    {
      "from": "史詩T1-3星/EpicT1(3-Star)",
      "to": "傳說/Mythic",
      "costs": {
        "強韌合金/Hardened Alloy": 22000,
        "拋光液/Polishing Solution": 220,
        "設計圖紙/Design Plans": 40,
        "月光琥珀/Lunar Amber": 0
      }
    },
    {
      "from": "傳說/Mythic",
      "to": "傳說1星/Mythic(1-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 23000,
        "拋光液/Polishing Solution": 230,
        "設計圖紙/Design Plans": 40,
        "月光琥珀/Lunar Amber": 0
      }
    },
    {
      "from": "傳說1星/Mythic(1-Star)",
      "to": "傳說2星/Mythic(2-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 25000,
        "拋光液/Polishing Solution": 250,
        "設計圖紙/Design Plans": 45,
        "月光琥珀/Lunar Amber": 0
      }
    },
    {
      "from": "傳說2星/Mythic(2-Star)",
      "to": "傳說3星/Mythic(3-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 26000,
        "拋光液/Polishing Solution": 260,
        "設計圖紙/Design Plans": 45,
        "月光琥珀/Lunar Amber": 0
      }
    },
    {
      "from": "傳說3星/Mythic(3-Star)",
      "to": "傳說T1/MythicT1",
      "costs": {
        "強韌合金/Hardened Alloy": 28000,
        "拋光液/Polishing Solution": 280,
        "設計圖紙/Design Plans": 45,
        "月光琥珀/Lunar Amber": 0
      }
    },
    {
      "from": "傳說T1/MythicT1",
      "to": "傳說T1-1星/MythicT1(1-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 30000,
        "拋光液/Polishing Solution": 300,
        "設計圖紙/Design Plans": 55,
        "月光琥珀/Lunar Amber": 0
      }
    },
    {
      "from": "傳說T1-1星/MythicT1(1-Star)",
      "to": "傳說T1-2星/MythicT1(2-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 32000,
        "拋光液/Polishing Solution": 320,
        "設計圖紙/Design Plans": 55,
        "月光琥珀/Lunar Amber": 0
      }
    },
    {
      "from": "傳說T1-2星/MythicT1(2-Star)",
      "to": "傳說T1-3星/MythicT1(3-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 35000,
        "拋光液/Polishing Solution": 340,
        "設計圖紙/Design Plans": 55,
        "月光琥珀/Lunar Amber": 0
      }
    },
    {
      "from": "傳說T1-3星/MythicT1(3-Star)",
      "to": "傳說T2/MythicT2",
      "costs": {
        "強韌合金/Hardened Alloy": 38000,
        "拋光液/Polishing Solution": 360,
        "設計圖紙/Design Plans": 55,
        "月光琥珀/Lunar Amber": 0
      }
    },
    {
      "from": "傳說T2/MythicT2",
      "to": "傳說T2-1星/MythicT2(1-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 43000,
        "拋光液/Polishing Solution": 430,
        "設計圖紙/Design Plans": 75,
        "月光琥珀/Lunar Amber": 0
      }
    },
    {
      "from": "傳說T2-1星/MythicT2(1-Star)",
      "to": "傳說T2-2星/MythicT2(2-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 45000,
        "拋光液/Polishing Solution": 460,
        "設計圖紙/Design Plans": 80,
        "月光琥珀/Lunar Amber": 0
      }
    },
    {
      "from": "傳說T2-2星/MythicT2(2-Star)",
      "to": "傳說T2-3星/MythicT2(3-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 48000,
        "拋光液/Polishing Solution": 500,
        "設計圖紙/Design Plans": 85,
        "月光琥珀/Lunar Amber": 0
      }
    },
    {
      "from": "傳說T2-3星/MythicT2(3-Star)",
      "to": "神話/Legendary",
      "costs": {
        "強韌合金/Hardened Alloy": 50000,
        "拋光液/Polishing Solution": 530,
        "設計圖紙/Design Plans": 85,
        "月光琥珀/Lunar Amber": 10
      }
    },
    {
      "from": "神話/Legendary",
      "to": "神話1星/Legendary(1-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 52000,
        "拋光液/Polishing Solution": 560,
        "設計圖紙/Design Plans": 90,
        "月光琥珀/Lunar Amber": 10
      }
    },
    {
      "from": "神話1星/Legendary(1-Star)",
      "to": "神話2星/Legendary(2-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 54000,
        "拋光液/Polishing Solution": 590,
        "設計圖紙/Design Plans": 95,
        "月光琥珀/Lunar Amber琥珀": 10
      }
    },
    {
      "from": "神話2星/Legendary(2-Star)",
      "to": "神話3星/Legendary(3-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 56000,
        "拋光液/Polishing Solution": 620,
        "設計圖紙/Design Plans": 100,
        "月光琥珀/Lunar Amber": 10
      }
    },
    {
      "from": "神話3星/Legendary(3-Star)",
      "to": "神話T1/LegendaryT1",
      "costs": {
        "強韌合金/Hardened Alloy": 59000,
        "拋光液/Polishing Solution": 670,
        "設計圖紙/Design Plans": 110,
        "月光琥珀/Lunar Amber": 15
      }
    },
    {
      "from": "神話T1/LegendaryT1",
      "to": "神話T1-1星/LegendaryT1(1-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 61000,
        "拋光液/Polishing Solution": 700,
        "設計圖紙/Design Plans": 115,
        "月光琥珀/Lunar Amber": 15
      }
    },
    {
      "from": "神話T1-1星/LegendaryT1(1-Star)",
      "to": "神話T1-2星/LegendaryT1(2-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 63000,
        "拋光液/Polishing Solution": 730,
        "設計圖紙/Design Plans": 120,
        "月光琥珀/Lunar Amber": 15
      }
    },
    {
      "from": "神話T1-2星/LegendaryT1(2-Star)",
      "to": "神話T1-3星/LegendaryT1(3-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 65000,
        "拋光液/Polishing Solution": 760,
        "設計圖紙/Design Plans": 125,
        "月光琥珀/Lunar Amber": 15
      }
    },
    {
      "from": "神話T1-3星/LegendaryT1(3-Star)",
      "to": "神話T2/LegendaryT2",
      "costs": {
        "強韌合金/Hardened Alloy": 68000,
        "拋光液/Polishing Solution": 810,
        "設計圖紙/Design Plans": 135,
        "月光琥珀/Lunar Amber": 20
      }
    },
    {
      "from": "神話T2/LegendaryT2",
      "to": "神話T2-1星/LegendaryT2(1-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 70000,
        "拋光液/Polishing Solution": 840,
        "設計圖紙/Design Plans": 140,
        "月光琥珀/Lunar Amber": 20
      }
    },
    {
      "from": "神話T2-1星/LegendaryT2(1-Star)",
      "to": "神話T2-2星/LegendaryT2(2-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 72000,
        "拋光液/Polishing Solution": 870,
        "設計圖紙/Design Plans": 145,
        "月光琥珀/Lunar Amber": 20
      }
    },
    {
      "from": "神話T2-2星/LegendaryT2(2-Star)",
      "to": "神話T2-3星/LegendaryT2(3-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 74000,
        "拋光液/Polishing Solution": 900,
        "設計圖紙/Design Plans": 150,
        "月光琥珀/Lunar Amber": 20
      }
    },
    {
      "from": "神話T2-3星/LegendaryT2(3-Star)",
      "to": "神話T3/LegendaryT3",
      "costs": {
        "強韌合金/Hardened Alloy": 77000,
        "拋光液/Polishing Solution": 950,
        "設計圖紙/Design Plans": 160,
        "月光琥珀/Lunar Amber": 25
      }
    },
    {
      "from": "神話T3/LegendaryT3",
      "to": "神話T3-1星/LegendaryT3(1-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 80000,
        "拋光液/Polishing Solution": 990,
        "設計圖紙/Design Plans": 165,
        "月光琥珀/Lunar Amber": 25
      }
    },
    {
      "from": "神話T3-1星/LegendaryT3(1-Star)",
      "to": "神話T3-2星/LegendaryT3(2-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 83000,
        "拋光液/Polishing Solution": 1030,
        "設計圖紙/Design Plans": 170,
        "月光琥珀/Lunar Amber": 25
      }
    },
    {
      "from": "神話T3-2星/LegendaryT3(2-Star)",
      "to": "神話T3-3星/LegendaryT3(3-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 86000,
        "拋光液/Polishing Solution": 1070,
        "設計圖紙/Design Plans": 180,
        "月光琥珀/Lunar Amber": 25
      }
    },
    {
      "from": "神話T3-3星/LegendaryT3(3-Star)",
      "to": "神話T3-3星-1/LegendaryT3(3-Star)-1",
      "costs": {
        "強韌合金/Hardened Alloy": 24000,
        "拋光液/Polishing Solution": 300,
        "設計圖紙/Design Plans": 50,
        "月光琥珀/Lunar Amber": 8
      }
    },
    {
      "from": "神話T3-3星-1/LegendaryT3(3-Star)-1",
      "to": "神話T3-3星-1/LegendaryT3(3-Star)-2",
      "costs": {
        "強韌合金/Hardened Alloy": 24000,
        "拋光液/Polishing Solution": 300,
        "設計圖紙/Design Plans": 50,
        "月光琥珀/Lunar Amber": 8
      }
    },
    {
      "from": "神話T3-3星-2/LegendaryT3(3-Star)-2",
      "to": "神話T3-3星-3/LegendaryT3(3-Star)-3",
      "costs": {
        "強韌合金/Hardened Alloy": 24000,
        "拋光液/Polishing Solution": 300,
        "設計圖紙/Design Plans": 50,
        "月光琥珀/Lunar Amber": 8
      }
    },
    {
      "from": "神話T3-3星-3/LegendaryT3(3-Star)-3",
      "to": "神話T3-3星-4/LegendaryT3(3-Star)-4",
      "costs": {
        "強韌合金/Hardened Alloy": 24000,
        "拋光液/Polishing Solution": 300,
        "設計圖紙/Design Plans": 50,
        "月光琥珀/Lunar Amber": 8
      }
    },
    {
      "from": "神話T3-3星-4/LegendaryT3(3-Star)-4",
      "to": "神話T4/LegensaryT4",
      "costs": {
        "強韌合金/Hardened Alloy": 24000,
        "拋光液/Polishing Solution": 300,
        "設計圖紙/Design Plans": 50,
        "月光琥珀/Lunar Amber": 8
      }
    },
    {
      "from": "神話T4/LegensaryT4",
      "to": "-神話T4-1/-LegensaryT4-1",
      "costs": {
        "強韌合金/Hardened Alloy": 28000,
        "拋光液/Polishing Solution": 330,
        "設計圖紙/Design Plans": 55,
        "月光琥珀/Lunar Amber": 8
      }
    },
    {
      "from": "神話T4-1/-LegensaryT4-1",
      "to": "-神話T4-2/-LegensaryT4-2",
      "costs": {
        "強韌合金/Hardened Alloy": 28000,
        "拋光液/Polishing Solution": 330,
        "設計圖紙/Design Plans": 55,
        "月光琥珀/Lunar Amber": 8
      }
    },
    {
      "from": "神話T4-2/LegensaryT4-2",
      "to": "神話T4-3/LegensaryT4-3",
      "costs": {
        "強韌合金/Hardened Alloy": 28000,
        "拋光液/Polishing Solution": 330,
        "設計圖紙/Design Plans": 55,
        "月光琥珀/Lunar Amber": 8
      }
    },
    {
      "from": "神話T4-3/LegensaryT4-3",
      "to": "-神話T4-4/-LegensaryT4-4",
      "costs": {
        "強韌合金/Hardened Alloy": 28000,
        "拋光液/Polishing Solution": 330,
        "設計圖紙/Design Plans": 55,
        "月光琥珀/Lunar Amber": 8
      }
    },
    {
      "from": "神話T4-4/LegensaryT4-4",
      "to": "-神話T4-1星/-LegensaryT4(1-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 28000,
        "拋光液/Polishing Solution": 330,
        "設計圖紙/Design Plans": 55,
        "月光琥珀/Lunar Amber": 8
      }
    },
    {
      "from": "神話T4-1星/-LegensaryT4(1-Star)",
      "to": "神話T4-1星-1/LegensaryT4(1-Star)-1",
      "costs": {
        "強韌合金/Hardened Alloy": 32000,
        "拋光液/Polishing Solution": 360,
        "設計圖紙/Design Plans": 60,
        "月光琥珀/Lunar Amber": 8
      }
    },
    {
      "from": "神話T4-1星-1/LegensaryT4(1-Star)-1",
      "to": "神話T4-1星-2/LegensaryT4(1-Star)-2",
      "costs": {
        "強韌合金/Hardened Alloy": 32000,
        "拋光液/Polishing Solution": 360,
        "設計圖紙/Design Plans": 60,
        "月光琥珀/Lunar Amber": 8
      }
    },
    {
      "from": "神話T4-1星-2/LegensaryT4(1-Star)-2",
      "to": "神話T4-1星-2/LegensaryT4(1-Star)-3",
      "costs": {
        "強韌合金/Hardened Alloy": 32000,
        "拋光液/Polishing Solution": 360,
        "設計圖紙/Design Plans": 60,
        "月光琥珀/Lunar Amber": 8
      }
    },
    {
      "from": "神話T4-1星-2/LegensaryT4(1-Star)-3",
      "to": "神話T4-1星-4/LegensaryT4(1-Star)-4",
      "costs": {
        "強韌合金/Hardened Alloy": 32000,
        "拋光液/Polishing Solution": 360,
        "設計圖紙/Design Plans": 60,
        "月光琥珀/Lunar Amber": 8
      }
    },
    {
      "from": "神話T4-1星-4/LegensaryT4(1-Star)-4",
      "to": "神話T4-2星/LegensaryT4(2-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 32000,
        "拋光液/Polishing Solution": 360,
        "設計圖紙/Design Plans": 60,
        "月光琥珀/Lunar Amber": 8
      }
    },
    {
      "from": "神話T4-2星/LegensaryT4(2-Star)",
      "to": "神話T4-2星-1/LegensaryT4(2-Star)-1",
      "costs": {
        "強韌合金/Hardened Alloy": 36000,
        "拋光液/Polishing Solution": 390,
        "設計圖紙/Design Plans": 65,
        "月光琥珀/Lunar Amber": 8
      }
    },
    {
      "from": "神話T4-2星-1/LegensaryT4(2-Star)-1",
      "to": "神話T4-2星-2/LegensaryT4(2-Star)-2",
      "costs": {
        "強韌合金/Hardened Alloy": 36000,
        "拋光液/Polishing Solution": 390,
        "設計圖紙/Design Plans": 65,
        "月光琥珀/Lunar Amber": 8
      }
    },
    {
      "from": "神話T4-2星-2/LegensaryT4(2-Star)-2",
      "to": "神話T4-2星-3/LegensaryT4(2-Star)-3",
      "costs": {
        "強韌合金/Hardened Alloy": 36000,
        "拋光液/Polishing Solution": 390,
        "設計圖紙/Design Plans": 65,
        "月光琥珀/Lunar Amber": 8
      }
    },
    {
      "from": "神話T4-2星-3/LegensaryT4(2-Star)-3",
      "to": "神話T4-2星-4/LegensaryT4(2-Star)-4",
      "costs": {
        "強韌合金/Hardened Alloy": 36000,
        "拋光液/Polishing Solution": 390,
        "設計圖紙/Design Plans": 65,
        "月光琥珀/Lunar Amber": 8
      }
    },
    {
      "from": "神話T4-2星-4/LegensaryT4(2-Star)-4",
      "to": "神話T4-3星/LegensaryT4(3-Star)",
      "costs": {
        "強韌合金/Hardened Alloy": 36000,
        "拋光液/Polishing Solution": 390,
        "設計圖紙/Design Plans": 65,
        "月光琥珀/Lunar Amber": 8
      }
    }
  ]
};
