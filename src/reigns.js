export default [
    {
        id: 'acknowledge-him',
        name: 'Acknowledge Him',
        image: 'https://www.wwe.com/f/styles/wwe_large/public/all/2022/04/330_WM38_04032022EJ_34922--023527625597189e7da61ee840674d08.jpg',
        wrestlerIds: [
            'roman-reigns'
        ],
        wrestlers: [
            {
                id: 'roman-reigns',
                brandIds: ['smackdown'],
                name: 'Roman Reigns',
                entranceVideoEmbedId: 'ql23nGzD8GE',
                image:
                    '//www.wwe.com/f/styles/wwe_large/public/all/2019/04/Roman_Reigns_bio--0ae73db3f83e01688662e05e04cfd552.jpg'
            }
        ],
        championship: {
            id: 'uni-world',
            name: 'Universal Championship',
            wrestlerIds: ['roman-reigns'],
            brandIds: ['smackdown', 'raw'],
            gender: 'MALE',
            image:
                'https://www.wwe.com/f/styles/wwe_16_9_s/public/all/2019/11/Universal_Championship_SD--384d68e1f2cff0dc98447b52a360bd0c.png',
            color: '#ffffff',
            backgroundColor: '#28356f',
            minPoints: 85,
            maxPoints: 100
        },
        championshipId: 'uni-world',
        defenses: 25,
        startDate: new Date('Aug 30, 2020'),
        endDate: null
    },
    {
        id: 'big-cash-in',
        name: 'Big Cash In',
        image: 'https://www.wwe.com/f/styles/talent_champion_xl/public/all/2021/09/074_RAW_09132021RF_26560--5d84baa951165f5100081a541c72089d.jpg',
        defenses: 6,
        startDate: new Date('Sept 13, 2021'),
        endDate: new Date('Jan 01, 2022'),
        championshipId: 'wwe-world',
        wrestlerIds: [
            'big-e'
        ],
        wrestlers: [
            {
                id: 'big-e',
                entranceVideoEmbedId: 'KzYFAZGF2KI',
                name: 'Big E',
                image:
                  '//www.wwe.com/f/styles/wwe_large/public/all/2022/02/SD_03122021PM_19848---c2ff85ac691f4c58772bc279d1a773c5.jpg'
              }
        ],
        championship:   {
            id: 'wwe-world',
            name: 'WWE Championship',
            gender: 'MALE',
            backgroundColor: '#27211f',
            color: '#ffffff',
            image:
              'https://www.wwe.com/f/styles/wwe_16_9_xs/public/championship/Belt/WWE_World_Heavyweight_Championship.png',
            minPoints: 90,
            maxPoints: 100
          }
    }
]