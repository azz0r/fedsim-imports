const POINTS = {
  LEGEND_TOP: 99,
  LEGEND_BOTTOM: 95,

  MAIN_TOP: 90,
  MAIN_BOTTOM: 85,

  MID_TOP: 80,
  MID_MID: 75,
  MID_BOTTOM: 70,

  BOTTOM_TOP: 65,
  BOTTOM_MID: 60,
  BOTTOM_BOTTOM: 55,

  ANNOUNCER: 20,
  NO_COMBAT: 1
}

const ALIGNMENTS = {
  DEFAULT: 'NEUTRAL',
  BAD: 'BAD',
  NEUTRAL: 'NEUTRAL',
  GOOD: 'GOOD'
}

export default [
  {
    id: 'roman-reigns',
    alignment: ALIGNMENTS.BAD,
    brandIds: ['smackdown'],
    name: 'Roman Reigns',
    entranceVideoEmbedId: 'ql23nGzD8GE',
    points: POINTS.MAIN_TOP,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/04/Roman_Reigns_bio--0ae73db3f83e01688662e05e04cfd552.jpg'
  },
  {
    id: 'brock-lesnar',
    brandIds: ['raw'],
    name: 'Brock Lesnar',
    alignment: ALIGNMENTS.BAD,
    points: POINTS.LEGEND_BOTTOM,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Brock_Lesnar_bio.png'
  },
  {
    id: 'john-cena',
    name: 'John Cena',
    brandIds: ['hall-of-fame'],
    alignment: ALIGNMENTS.GOOD,
    points: POINTS.LEGEND_BOTTOM,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/10/RAW_06202016rf_1606--3d3997f53e6f3e9277cd5a67fbd8f31f.jpg'
  },
  {
    id: 'stone-cold-steve-austin',
    name: '"Stone Cold" Steve Austin',
    brandIds: ['hall-of-fame'],
    points: POINTS.LEGEND_TOP,
    alignment: ALIGNMENTS.GOOD,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Steve_Austin_bio.jpg'
  },
  {
    id: 'the-rock',
    name: 'The Rock',
    brandIds: ['hall-of-fame'],
    points: POINTS.LEGEND_TOP,
    alignment: ALIGNMENTS.GOOD,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Dwayne_The_Rock_Johnson_bio.png'
  },
  {
    id: 'daniel-bryan',
    brandIds: ['aew'],
    name: 'Daniel Bryan',
    entranceVideoEmbedId: 'WHU5D2O31vs',
    points: POINTS.MAIN_BOTTOM,
    alignment: ALIGNMENTS.GOOD,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2018/06/Daniel_Bryan_bio--5b64b5311207d6c4e2a4beae4a51d129.jpg'
  },
  {
    id: 'drew-mcintyre',
    brandIds: ['smackdown'],
    name: 'Drew McIntyre',
    entranceVideoEmbedId: '47cmwx8qZAk',
    points: POINTS.MAIN_BOTTOM,
    alignment: ALIGNMENTS.GOOD,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/04/Drew_McIntyre_bio--faf610edeb2364647f7d7c9068611ea5.jpg'
  },
  {
    id: 'randy-orton',
    brandIds: ['raw'],
    name: 'Randy Orton',
    alignment: ALIGNMENTS.GOOD,
    points: POINTS.MAIN_BOTTOM,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Randy_Orton_bio.png'
  },
  {
    id: 'randy-orton-retro',
    name: 'Randy Orton Retro',
    brandIds: ['hall-of-fame'],
    alignment: ALIGNMENTS.BAD,
    points: POINTS.MAIN_BOTTOM,
    entranceVideoEmbedId: 'H5enKjKAlQU',
    image: '//www.wwe.com/f/styles/gallery_img_l/public/all/2020/07/004_Orto_10082007rf_054b--3035f42e9993d1988bded5655bf22d3c.jpg'
  },
  {
    id: 'aj-styles',
    brandIds: ['raw'],
    name: 'AJ Styles',
    alignment: ALIGNMENTS.GOOD,
    points: POINTS.MAIN_BOTTOM,
    entranceVideoEmbedId: 'fj9ala8nZ7U',
    wwe: true,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/04/AJ_Styles_bio--29520c1a21281781bb33b5afee4e6659.jpg'
  },
  {
    id: 'bobby-lashley',
    brandIds: ['raw'],
    name: 'Bobby Lashley',
    points: POINTS.MID_TOP,
    alignment: ALIGNMENTS.GOOD,
    wwe: true,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/01/119_RAW_01142019dg_2081--23a8032d8911c0bc1a6886161911f363.jpg'
  },
  {
    id: 'undertaker',
    brandIds: ['hall-of-fame'],
    name: 'Undertaker',
    points: POINTS.LEGEND_TOP,
    alignment: ALIGNMENTS.GOOD,
    wwe: true,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Undertaker_bio.png'
  },
  {
    id: 'asuka',
    brandIds: ['raw'],
    name: 'Asuka',
    points: POINTS.MAIN_BOTTOM,
    alignment: ALIGNMENTS.GOOD,
    gender: 'FEMALE',
    wwe: true,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/05/Asuka_bio--6b5bfe14193b2907e8c387e6247f5434.jpg'
  },
  {
    id: 'sasha-banks',
    name: 'Sasha Banks',
    gender: 'FEMALE',
    points: POINTS.MAIN_BOTTOM,
    alignment: ALIGNMENTS.BAD,
    wwe: true,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/08/140_RAW_08122019jg_2646--8cf76447f79ce919fa13c471765151ff.jpg'
  },
  {
    id: 'becky-lynch',
    brandIds: ['raw'],
    name: 'Becky Lynch',
    alignment: ALIGNMENTS.BAD,
    wwe: true,
    gender: 'FEMALE',
    entranceVideoEmbedId: 'xjS0uLKuhBo',
    points: POINTS.MAIN_TOP,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/08/163_SS_08212021RF_38278--547f17a13b7785efcc9d4a26192ac6c6.jpg'
  },
  {
    id: 'charlotte-flair',
    brandIds: ['smackdown'],
    name: 'Charlotte Flair',
    alignment: ALIGNMENTS.GOOD,
    gender: 'FEMALE',
    entranceVideoEmbedId: '9j7vE0x46iA',
    points: POINTS.MAIN_TOP,
    wwe: true,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2018/02/Charlotte_bio--e2e2bce3460ed8bb0be2a74bd0eddac5.jpg'
  },
  {
    id: 'bayley',
    brandIds: ['raw'],
    name: 'Bayley',
    gender: 'FEMALE',
    points: POINTS.MID_TOP,
    alignment: ALIGNMENTS.BAD,
    wwe: true,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/10/20191011_Smackdown_Bayley1--1266c041c429375cf11bbb217e310d3e.jpg'
  },
  {
    id: 'ronda-rousey',
    brandIds: ['smackdown'],
    name: 'Ronda Rousey',
    alignment: ALIGNMENTS.BAD,
    gender: 'FEMALE',
    points: POINTS.MAIN_TOP,
    wwe: true,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/01/Ronda_Rousey_Bio--06d8789c2edd0524df6c49a45e0aaa45.jpg'
  },
  {
    id: 'adam-cole',
    brandIds: ['aew'],
    name: 'Adam Cole',
    alignment: ALIGNMENTS.BAD,
    points: POINTS.MAIN_BOTTOM,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/03/Adam_Cole_bio--47f4f34c50713489d454e9e6935d834a.jpg'
  },
  {
    id: 'chris-jericho',
    brandIds: ['aew'],
    points: POINTS.MAIN_BOTTOM,
    alignment: ALIGNMENTS.BAD,
    name: 'Chris Jericho',
    entranceVideoEmbedId: 'WHU5D2O31vs',
    image:
      '//d1oa5135tmafz3.cloudfront.net/sites/default/files/styles/image_270x270/public/jericho.png?itok=As6wjsvC'
  },
  {
    id: 'seth-rollins',
    brandIds: ['raw'],
    name: 'Seth "Freakin" Rollins',
    points: POINTS.MAIN_BOTTOM,
    alignment: ALIGNMENTS.BAD,
    entranceVideoEmbedId: 'U6g10Gvu3gw',
    wwe: true,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/01/Seth_Rollins_Bio--72130ce54b794fca16e54bda79a419ab.jpg'
  },
  {
    id: 'finn-balor',
    brandIds: ['raw'],
    name: 'Finn Bálor',
    points: POINTS.MID_TOP,
    alignment: ALIGNMENTS.BAD,
    wwe: true,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2022/08/balor_primary--4bd145b2d54e259fd5edb603a5e1e621.jpg'
  },
  {
    id: 'cody-rhodes',
    wwe: true,
    cost: 200,
    brandIds: ['raw'],
    name: 'Cody Rhodes',
    entranceVideoEmbedId: '6Gr5vZ-bmSI',
    points: POINTS.MAIN_TOP,
    alignment: ALIGNMENTS.GOOD,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2022/04/160_WM38_04022022RF_10380--3d3a4a9239ed9ad48e3724bff82ab1c9.jpg'
  },
  {
    id: 'riddle',
    brandIds: ['raw'],
    name: 'Riddle',
    entranceVideoEmbedId: 'bbSv8xvJtNg',
    points: POINTS.MID_MID,
    alignment: ALIGNMENTS.GOOD,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/01/Matt_Riddle_bio--f2affe75ec7a776a310e9973755aa3b1.jpg'
  },
  {
    id: 'shayna-baszler',
    brandIds: ['smackdown'],
    name: 'Shayna Baszler',
    points: POINTS.MID_TOP,
    alignment: ALIGNMENTS.BAD,
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2018/06/Shayna_Baszler_bio--b20a895b0ddeaf83146e4defd9c13def.jpg'
  },
  {
    id: 'kevin-owens',
    brandIds: ['raw'],
    name: 'Kevin Owens',
    points: POINTS.MAIN_BOTTOM,
    alignment: ALIGNMENTS.BAD,
    entranceVideoEmbedId: 'SR1SiqiIL0M',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/05/Kevin_Owens-bio--b14285e93435ada11692829e4e1b39fa.jpg'
  },
  {
    id: 'big-e',
    brandIds: ['smackdown'],
    points: POINTS.MAIN_BOTTOM,
    alignment: ALIGNMENTS.GOOD,
    entranceVideoEmbedId: 'KzYFAZGF2KI',
    name: 'Big E',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2022/02/SD_03122021PM_19848---c2ff85ac691f4c58772bc279d1a773c5.jpg'
  },
  {
    id: 'kenny-omega',
    brandIds: ['aew'],
    name: 'Kenny Omega',
    points: POINTS.MAIN_TOP,
    alignment: ALIGNMENTS.BAD,
    entranceVideoEmbedId: '5vHpRoIpaU0',
    cost: 310
  },
  {
    id: 'adam-page',
    brandIds: ['aew'],
    name: 'Hangman Adam Page',
    points: POINTS.MAIN_TOP,
    alignment: ALIGNMENTS.GOOD,
    entranceVideoEmbedId: 'OM0ilkux9_M',
    cost: 150
  },
  {
    id: 'edge',
    brandIds: ['raw'],
    name: 'Edge',
    points: POINTS.LEGEND_BOTTOM,
    alignment: ALIGNMENTS.GOOD,
    image: '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Edge_bio.png'
  },
  {
    id: 'tommaso-ciampa',
    brandIds: ['raw'],
    name: 'Ciampa',
    points: POINTS.MID_MID,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2018/02/Tomasso_bio--89cd4a14dee8422539989f9afdf29e06.jpg'
  },
  {
    id: 'darby-allin',
    brandIds: ['aew'],
    name: 'Darby Allin',
    points: POINTS.MID_MID,
    alignment: ALIGNMENTS.GOOD,
    cost: 70,
    image:
      '//images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0c782e4c-fae0-4a87-b7b1-a752598d9df9/ddlpfi9-320ec6cd-8765-4e72-bb13-b05dcce69fdf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMGM3ODJlNGMtZmFlMC00YTg3LWI3YjEtYTc1MjU5OGQ5ZGY5XC9kZGxwZmk5LTMyMGVjNmNkLTg3NjUtNGU3Mi1iYjEzLWIwNWRjY2U2OWZkZi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.kvfkl4Ac6DPhELouqahYH6eUHAoYeDtFuLpwU_aghxc'
  },
  {
    id: 'jake-hagar',
    brandIds: ['aew'],
    name: 'Jake Hager',
    points: POINTS.MID_MID,
    image:
      '//www.wwe.com/f/styles/talent_champion_lg/public/rd-talent/Profile/Jack_Swagger_pro.png'
  },
  {
    id: 'brian-cage',
    points: POINTS.MID_MID,
    alignment: ALIGNMENTS.BAD,
    brandIds: ['aew'],
    name: 'Brian Cage'
  },
  {
    id: 'sting',
    brandIds: ['aew'],
    name: 'Sting',
    points: POINTS.MID_MID,
    alignment: ALIGNMENTS.GOOD,
    image: '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Sting_bio.jpg'
  },
  {
    id: 'dean-ambrose',
    brandIds: ['aew'],
    name: 'Dean Ambrose',
    points: POINTS.MAIN_TOP,
    alignment: ALIGNMENTS.GOOD,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2018/12/Dean_Ambrose_Bio--6baa7055a81e2551fa07b2a59a19e984.jpg'
  },
  {
    id: 'bron-breakker',
    brandIds: ['nxt'],
    name: 'Bron Breakker',
    points: POINTS.MID_TOP,
    alignment: ALIGNMENTS.GOOD,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/10/Bron_Breakker_bio--881f838e6bcdb47ac0cf3d5fab0774f4.jpg'
  },
  {
    id: 'luchasaurus',
    brandIds: ['aew'],
    name: 'Luchasaurus',
    points: POINTS.MID_MID,
    alignment: ALIGNMENTS.BAD,
    image:
      '//vignette.wikia.nocookie.net/prowrestling/images/d/db/Luchasaurus_-_981-9813616.jpg/revision/latest?cb=20190903154308'
  },
  {
    id: 'matt-jackson',
    brandIds: ['aew'],
    name: 'Matt Jackson',
    points: POINTS.MID_TOP,
    alignment: ALIGNMENTS.BAD,
    image:
      '//d2isjg8ovcm7q0.cloudfront.net/sites/default/files/matt-jackson.png'
  },
  {
    id: 'nick-jackson',
    brandIds: ['aew'],
    name: 'Nick Jackson',
    points: POINTS.MID_TOP,
    alignment: ALIGNMENTS.BAD,
    image:
      '//d2isjg8ovcm7q0.cloudfront.net/sites/default/files/nick-jackson.png'
  },
  {
    id: 'scorpio-sky',
    brandIds: ['aew'],
    name: 'Scorpio Sky',
    points: POINTS.MID_BOTTOM,
    alignment: ALIGNMENTS.BAD,
    image:
      '//vignette.wikia.nocookie.net/prowrestling/images/5/54/Scorpio_Sky_-_5HYB68E6.jpg/revision/latest?cb=20170131021450'
  },
  {
    id: 'goldberg',
    brandIds: ['wcw', 'hall-of-fame'],
    name: 'Goldberg',
    entranceVideoEmbedId: 'wPcyW3eKL20',
    points: POINTS.LEGEND_TOP,
    alignment: ALIGNMENTS.GOOD,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Goldberg_bio.png'
  },
  {
    id: 'bret-hart',
    brandIds: ['wcw', 'hall-of-fame'],
    name: 'Bret Hart',
    alignment: ALIGNMENTS.GOOD,
    entranceVideoEmbedId: '5mYXWOCgXQQ',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Bret_Hart_bio.png'
  },
  {
    id: 'vader-alumni',
    brandIds: ['wcw', 'hall-of-fame'],
    alignment: ALIGNMENTS.BAD,
    name: 'Vader',
    image: '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Vader_bio.jpg'
  },
  {
    id: 'jim-neidhart',
    brandIds: ['wcw', 'hall-of-fame'],
    name: 'Jim "The Anvil" Neidhart',
    alignment: ALIGNMENTS.BAD,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Jim_The_Anvil_Neidhart_bio.png'
  },
  {
    id: 'awesome-kong',
    gender: 'FEMALE',
    name: 'Awesome Kong',
    points: POINTS.MID_TOP,
    alignment: ALIGNMENTS.BAD,
    image:
      '//www.wwe.com/f/styles/talent_champion_lg/public/rd-talent/Profile/Kharma_Pro.png'
  },
  {
    id: 'britt-baker',
    gender: 'FEMALE',
    brandIds: ['aew'],
    name: 'Britt Baker',
    points: POINTS.MAIN_BOTTOM,
    entranceVideoEmbedId: '4t2zR_YeBng',
    alignment: ALIGNMENTS.BAD
  },
  {
    id: 'lance-archer',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/02/Lance_20210703@AEW_5.png',
    brandIds: ['aew'],
    name: 'Lance Archer',
    alignment: ALIGNMENTS.BAD,
    points: POINTS.MID_MID
  },
  {
    id: 'miro',
    brandIds: ['aew'],
    points: POINTS.MID_MID,
    alignment: ALIGNMENTS.BAD,
    name: 'Miro',
    entranceVideoEmbedId: 'FZMlq_MdmR0',
    image:
      '//www.wwe.com/f/styles/talent_champion_xs/public/all/2019/10/Superstar_Rusev_Profile--301ab4a68f0f63b6497fd1beeae94b48.png'
  },
  {
    id: 'cm-punk',
    brandIds: ['aew'],
    name: 'CM Punk',
    points: POINTS.LEGEND_BOTTOM,
    alignment: ALIGNMENTS.BAD,
    entranceVideoEmbedId: 'W4v7RUBF8CQ',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/CM_Punk_bio.jpg'
  },
  {
    id: 'big-show',
    brandIds: ['aew'],
    name: 'Big Show',
    points: POINTS.ANNOUNCER,
    alignment: ALIGNMENTS.BAD,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2017/03/Big_Show_bio--5c987005c8e0594e2f46c55d5fc8f6de.jpg'
  },
  {
    id: 'mark-henry',
    brandIds: ['aew'],
    name: 'Mark Henry',
    points: POINTS.ANNOUNCER,
    alignment: ALIGNMENTS.GOOD,
    entranceVideoEmbedId: 'B0MslYif9iQ',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Mark_Henry_bio15.png'
  },
  {
    id: 'bray-wyatt',
    name: 'Bray Wyatt',
    brandIds: ['smackdown'],
    points: POINTS.MAIN_TOP,
    alignment: ALIGNMENTS.BAD,
    entranceVideoEmbedId: '_9KOXu24WK0',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/08/SS_08112019cm_3813--5932764172e5d2589d08d0e07962ff12.JPG'
  },
  {
    id: 'christian',
    brandIds: ['aew'],
    points: POINTS.MID_BOTTOM,
    name: 'Christian',
    alignment: ALIGNMENTS.BAD,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Christian_bio.png'
  },
  {
    id: 'ric-flair',
    brandIds: ['wcw', 'hall-of-fame'],
    name: 'Ric Flair',
    points: POINTS.LEGEND_TOP,
    alignment: ALIGNMENTS.BAD,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Ric_Flair_bio.jpg'
  },
  {
    id: 'batista',
    brandIds: ['hall-of-fame'],
    name: 'Batista',
    points: POINTS.LEGEND_BOTTOM,
    alignment: ALIGNMENTS.BAD,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Batista_bio.jpg'
  },
  {
    id: 'shawn-michaels',
    brandIds: ['nxt'],
    name: 'Shawn Michaels',
    entranceVideoEmbedId: 'j4ErmBDTOJo',
    points: POINTS.NO_COMBAT,
    alignment: ALIGNMENTS.GOOD,
    image:
      '//www.wwe.com/f/styles/wwe_16_9_l_FC/public/2022/11/20221115_NXT_Shawn--11b0d789aff5d343caad7e2a7187721c.jpg'
  },
  {
    id: 'shawn-michaels-hof',
    brandIds: ['hall-of-fame'],
    name: 'Shawn Michaels',
    entranceVideoEmbedId: 'j4ErmBDTOJo',
    points: POINTS.LEGEND_BOTTOM,
    alignment: ALIGNMENTS.GOOD,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Shawn_Michaels_bio.jpg'
  },
  {
    id: 'curt-hennig',
    brandIds: ['wcw'],
    name: '"Mr. Perfect" Curt Hennig',
    points: POINTS.MID_MID,
    alignment: ALIGNMENTS.BAD,
    entranceVideoEmbedId: 'Hs8ANY_7WGI',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/MrPerfect_bio.jpg'
  },
  {
    id: 'randy-savage',
    brandIds: ['wcw', 'hall-of-fame'],
    name: 'Randy Savage',
    points: POINTS.MAIN_BOTTOM,
    alignment: ALIGNMENTS.GOOD,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Randy_Savage_bio.jpg'
  },
  {
    id: 'hulk-hogan',
    brandIds: ['wcw', 'hall-of-fame'],
    name: 'Hulk Hogan',
    points: POINTS.LEGEND_TOP,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Hulk_Hogan_Bio.jpg'
  },
  {
    id: 'lex-luger',
    brandIds: ['wcw', 'hall-of-fame'],
    name: 'Lex Luger',
    points: POINTS.LEGEND_BOTTOM,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Lex_Luger_bio.jpg'
  },
  {
    id: 'scott-steiner',
    brandIds: ['wcw', 'hall-of-fame'],
    name: 'Scott Steiner',
    points: POINTS.LEGEND_BOTTOM,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Scott_Steiner_bio.jpg'
  },
  {
    id: 'yokozuna',
    brandIds: ['hall-of-fame'],
    name: 'Yokozuna',
    points: POINTS.LEGEND_BOTTOM,
    entranceVideoEmbedId: 'eVg0tD8B8hs',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/2016/02/Yokozuna_bio--12cbb0873e1b83a7fa05ec45614fc134.jpg'
  },
  {
    id: 'rick-steiner',
    brandIds: ['wcw', 'hall-of-fame'],
    name: 'Rick Steiner',
    points: POINTS.LEGEND_BOTTOM,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Rick_Steiner_bio.jpg'
  },
  {
    id: 'rikishi',
    brandIds: ['hall-of-fame'],
    name: 'Rikishi',
    points: POINTS.LEGEND_BOTTOM,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Rikishi_bio.jpg'
  },
  {
    id: 'kurt-angle',
    brandIds: ['hall-of-fame'],
    name: 'Kurt Angle',
    points: POINTS.LEGEND_BOTTOM,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2017/04/Kurt_Angle_bio--f9c9aeddb0461a945addadb12c395032.jpg'
  },
  {
    id: 'mick-foley',
    brandIds: ['hall-of-fame'],
    name: 'Mick Foley',
    points: POINTS.MID_MID,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2017/01/Mick_Foley_bio--4f72838dc2f52dc94e8bf99a643edce6.jpg'
  },
  {
    id: 'jim-ross',
    brandIds: ['aew'],
    name: 'Jim Ross',
    points: POINTS.NO_COMBAT,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Jim_Ross_bio.png'
  },
  {
    id: 'eddie-guerrero',
    brandIds: ['hall-of-fame'],
    name: 'Eddie Guerrero',
    points: POINTS.LEGEND_BOTTOM,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Eddie_Guerrero_bio.png'
  },
  {
    id: 'eddie-kingston',
    image:
      '//www.njpw1972.com/wp-content/uploads/2021/09/EddieKingston_20211115_1-1.png',
    brandIds: ['aew'],
    name: 'Eddie Kingston',
    points: POINTS.MID_MID
  },
  {
    id: 'keith-lee',
    brandIds: ['aew'],
    name: 'Keith Lee',
    points: POINTS.MID_MID,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2018/08/Keith_Lee_bio--d3d040cad664a30d198d297e39a329d1.jpg'
  },
  {
    id: 'jeff-hardy',
    brandIds: ['aew'],
    name: 'Jeff Hardy',
    points: POINTS.MID_MID,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/02/Jeff_Hardy_Bio--37ebc027d0af9203fd5739121f47a19b.jpg'
  },
  {
    id: 'matt-hardy',
    brandIds: ['aew'],
    name: 'Matt Hardy',
    points: POINTS.MID_BOTTOM,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2018/01/Matt_Hardy_Bio--757b586488848bf5d6b79b8494983e98.jpg'
  },
  {
    id: 'kofi-kingston',
    brandIds: ['smackdown'],
    name: 'Kofi Kingston',
    points: POINTS.MID_TOP,
    entranceVideoEmbedId: 'PdnBh3mOl9U',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/05/Kofi_Kingston-bio--a9875cc2196cfd5cc9745156479f197b.jpg'
  },
  {
    id: 'rhea-ripley',
    brandIds: ['raw'],
    name: 'Rhea Ripley',
    gender: 'FEMALE',
    points: POINTS.MID_TOP,
    alignment: ALIGNMENTS.BAD,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/08/062_RAW_08232021HM_25143--6cee358baa3a65a53e371b741380aa2d.jpg'
  },
  {
    id: 'damian-priest',
    brandIds: ['raw'],
    name: 'Damian Priest',
    points: POINTS.MID_TOP,
    alignment: ALIGNMENTS.BAD,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/06/Damian_Priest_Bio--f01a49c2a618945b641c42a7a3ebb128.jpg'
  },
  {
    id: 'bianca-belair',
    brandIds: ['raw'],
    gender: 'FEMALE',
    name: 'Bianca Belair',
    points: POINTS.MAIN_TOP,
    alignment: ALIGNMENTS.GOOD,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2017/11/BiancaBelair_bio--da86a5efe632a08918f0e91ed6772026.jpg'
  },
  {
    id: 'jey-uso',
    brandIds: ['smackdown'],
    name: 'Jey Uso',
    points: POINTS.MID_MID,
    entranceVideoEmbedId: 'tscAN8W0QgU',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2022/05/SD_02192021HM_15959--59667544d07b807048bceddbefa0ee88.JPG'
  },
  {
    id: 'sami-zayn',
    brandIds: ['smackdown'],
    points: POINTS.MID_MID,
    name: 'Sami Zayn',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/04/Sami_Zayn-bio--c1418ad5ede8c73e8dc5df623780d5bd.jpg'
  },
  {
    id: 'christopher-daniels',
    brandIds: ['aew'],
    name: 'Christopher Daniels',
    points: POINTS.MID_MID,
    image: '//d2isjg8ovcm7q0.cloudfront.net/sites/default/files/daniels2.png'
  },
  {
    id: 'frankie-kazarian',
    brandIds: ['aew'],
    name: 'Frankie Kazarian',
    points: POINTS.MID_MID,
    image: '//d2isjg8ovcm7q0.cloudfront.net/sites/default/files/frankie.png'
  },
  {
    id: 'mjf',
    brandIds: ['aew'],
    name: 'MJF',
    points: POINTS.MAIN_BOTTOM,
    cost: 60,
    image:
      '//vignette.wikia.nocookie.net/prowrestling/images/8/89/MJF_-_7ec54e9588a24443827c7a121299c4c6.png/revision/latest?cb=20191003135211'
  },
  {
    id: 'orange-cassidy',
    brandIds: ['aew'],
    name: 'Orange Cassidy',
    points: POINTS.MAIN_BOTTOM,
    image:
      '//pbs.twimg.com/profile_images/984773938931752962/8EGyL6Gz_400x400.jpg'
  },
  {
    id: 'pac',
    brandIds: ['aew'],
    name: 'Pac',
    points: POINTS.MAIN_BOTTOM,
    image:
      '//www.wwe.com/f/styles/talent_champion_lg/public/all/2017/01/Neville_pro--aa2f90dc2f99f902994779324b5ac371.png'
  },
  {
    id: 'pentagon-jr',
    brandIds: ['aew'],
    name: 'Pentagon Jr',
    points: POINTS.MAIN_BOTTOM,
    image:
      '//vignette.wikia.nocookie.net/svr06/images/8/88/Pentagon_jr_-_Copy_%282%29.png/revision/latest/scale-to-width-down/1000?cb=20190331015806'
  },
  {
    id: 'rey-fenix',
    brandIds: ['aew'],
    name: 'Rey Fenix',
    points: POINTS.MID_MID,
    image:
      '//vignette.wikia.nocookie.net/prowrestling/images/f/f9/FENIX.png/revision/latest?cb=20170420222236'
  },
  {
    id: 'santana',
    brandIds: ['aew'],
    name: 'Santana',
    points: POINTS.MID_MID,
    image:
      '//vignette.wikia.nocookie.net/impact/images/4/46/Santana.jpg/revision/latest?cb=20180925232307'
  },
  {
    id: 'the-butcher',
    brandIds: ['aew'],
    name: 'The Butcher',
    points: POINTS.MID_MID,
    image:
      '//vignette.wikia.nocookie.net/prowrestling/images/6/65/Andy_Williams.jpg/revision/latest?cb=20191208040325'
  },
  {
    id: 'wardlow',
    brandIds: ['aew'],
    name: 'Wardlow',
    points: POINTS.MID_MID,
    image:
      '//images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/98a6e8ba-294f-44c2-b878-23e230138aca/ddof2k8-e590c32b-d9b8-4a0f-94f4-193bdf9d0620.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOThhNmU4YmEtMjk0Zi00NGMyLWI4NzgtMjNlMjMwMTM4YWNhXC9kZG9mMms4LWU1OTBjMzJiLWQ5YjgtNGEwZi05NGY0LTE5M2JkZjlkMDYyMC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.4gtllbwnpzhtMx9VTg_-av_wHxuzRrps4cPBnWzmzeU'
  },
  {
    id: 'alexa-bliss',
    brandIds: ['raw'],
    gender: 'FEMALE',
    name: 'Alexa Bliss',
    points: POINTS.MID_MID,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/04/Alexa_Bliss-bio--db4d209ac33005defacf8e71718effe8.jpg'
  },
  {
    id: 'john-morrison',
    brandIds: ['impact'],
    name: 'John Morrison',
    points: POINTS.MID_MID,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/John_Morrison_bio.png'
  },
  {
    id: 'shinsuke-nakamura',
    brandIds: ['smackdown'],
    name: 'Shinsuke Nakamura ',
    points: POINTS.MID_MID,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2022/02/SD_02122021JG_12560--aaeabf289546fe5a94f13c0ee248ead7.JPG'
  },
  {
    id: 'iyo-sky',
    brandIds: ['raw'],
    name: 'IYO SKY',
    gender: 'FEMALE',
    points: POINTS.MID_MID,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/07/Io_Shirai_bio--d0c844fe63ebaa57b597f2a51f2d4cd9.jpg'
  },
  {
    id: 'toni-storm',
    brandIds: ['aew'],
    name: 'Toni Storm',
    points: POINTS.MAIN_BOTTOM,
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2018/10/UKCT_06182018at_1107--95083cb15a11912d1f862d9c58f68996.jpg'
  },
  {
    id: 'the-miz',
    brandIds: ['raw'],
    points: POINTS.MAIN_BOTTOM,
    name: 'The Miz',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/04/The_Miz-bio--e1d80a6a91ca20caff3891a49e5721c9.jpg'
  },
  {
    id: 'rey-mysterio',
    brandIds: ['smackdown'],
    points: POINTS.MAIN_BOTTOM,
    alignment: ALIGNMENTS.GOOD,
    name: 'Rey Mysterio',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2022/02/SD_02122021EJ_11841--d79080955cbf4d7ddde1f40a69bc47c9.jpg'
  },
  {
    id: 'tegan-nox',
    name: 'Tegan Nox',
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/10/NXT_08312019MM_3503--d8f6d7fecf5cdfc2dafcc12485bd54b4.jpg'
  },
  {
    id: 'butch',
    brandIds: ['smackdown'],
    alignment: ALIGNMENTS.BAD,
    points: POINTS.MID_MID,
    name: 'Butch',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2022/03/Butch_Bio--ea69da7224b44277eb4b6037cc16d89b.JPG'
  },
  {
    id: 'xavier-woods',
    brandIds: ['smackdown'],
    points: POINTS.MID_MID,
    name: 'Xavier Woods',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2022/03/023_SD_03252022DG_34800--66d97ef6e96816bb99faf7dd6e77cb2c.jpg'
  },
  {
    id: 'sheamus',
    brandIds: ['smackdown'],
    points: POINTS.MAIN_BOTTOM,
    alignment: ALIGNMENTS.BAD,
    entranceVideoEmbedId: 'wi22Xgxx-Ak',
    name: 'Sheamus',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2022/07/sheamus1--5299d51d0c132e8ca7b36fa43a23c634.jpg'
  },
  {
    id: 'dolph-ziggler',
    brandIds: ['smackdown'],
    points: POINTS.MID_BOTTOM,
    alignment: ALIGNMENTS.BAD,
    name: 'Dolph Ziggler',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/01/Dolph_Ziggler_Bio--fd320041eb75685e60d064e21c3380ab.jpg'
  },
  {
    id: 'cameron-grimes',
    brandIds: ['nxt'],
    name: 'Cameron Grimes',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/07/Cameron_Grimes_bio--20300a33783bf2d635c40618cfe6fdf6.jpg'
  },
  {
    id: 'theory',
    brandIds: ['raw'],
    points: POINTS.MID_TOP,
    alignment: ALIGNMENTS.BAD,
    name: 'Theory',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2022/07/Theory_bio-3--11eba4cfd63781a918e9d194f71149e5.jpg'
  },
  {
    id: 'kyle-oreilly',
    brandIds: ['aew'],
    name: "Kyle O'Reilly",
    alignment: ALIGNMENTS.BAD
  },
  {
    id: 'shotzi',
    brandIds: ['smackdown'],
    points: POINTS.MID_MID,
    name: 'Shotzi',
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2020/02/Shotzi_Blackheart_bio--2deba0c99c18e8e3014d58a025acaa98.jpg'
  },
  {
    id: 'cima',
    brandIds: ['aew'],
    name: 'Cima',
    points: 85,
    image:
      '//vignette.wikia.nocookie.net/prowrestling/images/c/c0/CIMA.png/revision/latest?cb=20160809113051'
  },
  {
    id: 'dustin-rhodes',
    brandIds: ['aew'],
    name: 'Dustin Rhodes',
    points: 85,
    image:
      '//vignette.wikia.nocookie.net/prowrestling/images/5/5d/Dustin_Rhodes_-_AEW_-_71184129.jpg/revision/latest?cb=20191019181321'
  },
  {
    id: 'doudrop',
    brandIds: ['raw'],
    name: 'Doudrop',
    gender: 'FEMALE',
    alignment: ALIGNMENTS.BAD,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/05/NXTUK_Coventry_02232019at_4833--41cbea96c27fc7afc4c223d7aa473679.jpg'
  },
  {
    id: 'jack-evans',
    brandIds: ['aew'],
    name: 'Jack Evans',
    points: 85,
    image: 'http://www.luchawiki.com/images/a/a3/Jack_Evans_2015.png'
  },
  {
    id: 'eva-marie',
    name: 'Eva Marie',
    gender: 'FEMALE',
    points: POINTS.BOTTOM_BOTTOM,
    alignment: ALIGNMENTS.BAD,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Eva_Marie_bio.png'
  },
  {
    id: 'jeff-cobb',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/11/jeffcobb_20201119_2.png',
    brandIds: ['ring-of-honor'],
    name: 'Jeff Cobb',
    points: POINTS.MID_MID
  },
  {
    id: 'jungle-boy',
    brandIds: ['aew'],
    name: 'Jungle Boy',
    points: 85,
    image:
      '//vignette.wikia.nocookie.net/mcuff/images/8/81/4869.jpg/revision/latest?cb=20200106135816'
  },
  {
    id: 'marq-quen',
    brandIds: ['aew'],
    name: 'Marq Quen',
    points: 85,
    image:
      '//images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ecf396fe-0ac8-46ce-a309-a3f5445e7da5/dd72k6x-73f11572-56da-4b59-b228-90802f5a6878.png/v1/fill/w_600,h_873,strp/marq_quen_by_kjc9578_dd72k6x-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04NzMiLCJwYXRoIjoiXC9mXC9lY2YzOTZmZS0wYWM4LTQ2Y2UtYTMwOS1hM2Y1NDQ1ZTdkYTVcL2RkNzJrNngtNzNmMTE1NzItNTZkYS00YjU5LWIyMjgtOTA4MDJmNWE2ODc4LnBuZyIsIndpZHRoIjoiPD02MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.fUupZayPXA9cTuTAd64XQ3F0qWS2IkZmDyiMZfjbg5M'
  },
  {
    id: 'ortiz',
    brandIds: ['aew'],
    name: 'Ortiz',
    points: 85,
    image:
      '//vignette.wikia.nocookie.net/prowrestling/images/6/63/Ortiz_LAX.jpg/revision/latest?cb=20170624000613'
  },
  {
    id: 'sammy-guevara',
    brandIds: ['aew'],
    name: 'Sammy Guevara',
    cost: 70,
    points: 85,
    image:
      '//images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/92c15a89-f0b4-4a8b-86dd-7165bd7189a0/ddvt497-042c6372-afaa-4149-92a3-e788b406fab2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOTJjMTVhODktZjBiNC00YThiLTg2ZGQtNzE2NWJkNzE4OWEwXC9kZHZ0NDk3LTA0MmM2MzcyLWFmYWEtNDE0OS05MmEzLWU3ODhiNDA2ZmFiMi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.1iYO2rDnjVLD1acm5I1tVlxdu39aRi3S-2C_Hp5GGik'
  },
  {
    id: 'stu-grayson',
    brandIds: ['aew'],
    name: 'Stu Grayson',
    points: 85,
    image:
      '//prowrestlingnewshub.com/wp-content/uploads/2020/03/Stu-Grayson-768x619.png'
  },
  {
    id: 'the-blade',
    brandIds: ['aew'],
    name: 'The Blade',
    points: 85,
    image:
      '//images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/542e0308-a57f-4dd7-89d2-d447f3cdd3a8/ddrzg2o-9f659106-4529-4cab-97d9-719a0f630ea4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNTQyZTAzMDgtYTU3Zi00ZGQ3LTg5ZDItZDQ0N2YzY2RkM2E4XC9kZHJ6ZzJvLTlmNjU5MTA2LTQ1MjktNGNhYi05N2Q5LTcxOWEwZjYzMGVhNC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.3m3MCLlolxB4fpWSKlePAVLPaCx3ntl0JyK6QAdCfw8'
  },
  {
    id: 'trent',
    brandIds: ['aew'],
    name: 'Trent',
    points: 85,
    image:
      '//vignette.wikia.nocookie.net/mcuff/images/2/29/Beretta.png/revision/latest?cb=20190122124809'
  },
  {
    id: 'hikaru-Shida',
    gender: 'FEMALE',
    brandIds: ['aew'],
    name: 'Hikaru Shida',
    points: 85,
    image:
      '//images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/98a6e8ba-294f-44c2-b878-23e230138aca/ddt64xv-863a33e0-df1d-4cfd-9ca0-8289629c8ba6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOThhNmU4YmEtMjk0Zi00NGMyLWI4NzgtMjNlMjMwMTM4YWNhXC9kZHQ2NHh2LTg2M2EzM2UwLWRmMWQtNGNmZC05Y2EwLTgyODk2MjljOGJhNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.B7axvjjzUvdSEStFhF_WH5gn2aW4idE_5ba_MrOAJEQ'
  },
  {
    id: 'kris-statlander',
    gender: 'FEMALE',
    brandIds: ['aew'],
    name: 'Kris Statlander',
    points: 85,
    image:
      '//vignette.wikia.nocookie.net/prowrestling/images/0/00/Kris_Statlander_-_ProfPic_-_18092.png/revision/latest?cb=20200828222815'
  },
  {
    id: 'nyla-rose',
    gender: 'FEMALE',
    brandIds: ['aew'],
    name: 'Nyla Rose',
    points: 85,
    image:
      '//vignette.wikia.nocookie.net/prowrestling/images/d/d6/Nyla_Rose_-_34162569438140708ab1c2ad68cf41ef.png/revision/latest?cb=20190609033419'
  },
  {
    id: 'penelope-ford',
    gender: 'FEMALE',
    brandIds: ['aew'],
    name: 'Penelope Ford',
    points: 85,
    image:
      '//images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/98a6e8ba-294f-44c2-b878-23e230138aca/ddsbdp2-a27542a1-0f13-4c17-a9a1-a29e9e09f947.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOThhNmU4YmEtMjk0Zi00NGMyLWI4NzgtMjNlMjMwMTM4YWNhXC9kZHNiZHAyLWEyNzU0MmExLTBmMTMtNGMxNy1hOWExLWEyOWU5ZTA5Zjk0Ny5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.v5CXh2MrDNOyfGc0gsz_9J7GBbHN0_M03MGuPyoUtsY'
  },
  {
    id: 'the-bunny',
    gender: 'FEMALE',
    brandIds: ['aew'],
    name: 'The Bunny',
    points: 85,
    image:
      '//images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/542e0308-a57f-4dd7-89d2-d447f3cdd3a8/ddrzixp-996b8cec-d7ec-4998-9922-98da5c0260e5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNTQyZTAzMDgtYTU3Zi00ZGQ3LTg5ZDItZDQ0N2YzY2RkM2E4XC9kZHJ6aXhwLTk5NmI4Y2VjLWQ3ZWMtNDk5OC05OTIyLTk4ZGE1YzAyNjBlNS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.4QXsawJTPnmP_1n4vm9lLRMzqLSu1ltmzRW4PVej4mM'
  },
  {
    id: 'yuka-sakazaki',
    gender: 'FEMALE',
    brandIds: ['aew'],
    name: 'Yuka Sakazaki',
    points: 85,
    image:
      '//vignette.wikia.nocookie.net/prowrestling/images/4/44/Yuka_Sakazaki_-_dd4x3q1.png/revision/latest?cb=20191031010800'
  },
  {
    id: 'chyna',
    brandIds: ['hall-of-fame'],
    gender: 'FEMALE',
    name: 'Chyna',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/2016/05/Chyna_bio--b046c73c4a0f544a13177e30bae2cb14.jpg'
  },
  //nxt
  {
    id: 'humberto-carrillo',
    brandIds: ['nxt'],
    name: 'Humberto',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/01/Humberto_Carrillo_bio--f0e91a3ad904fb24fe736a85e804d156.jpg'
  },
  {
    id: 'carmelo-hayes',
    brandIds: ['nxt'],
    name: 'Carmelo Hayes',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2022/08/Carmelo_Hayes_bio--ee74a774f429620659f605933267fe36.jpg'
  },
  {
    id: 'apollo-crews',
    brandIds: ['nxt'],
    name: 'Apollo Crews',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2022/08/crewsprimary--0392e55ae47b5fb6aff75074f4d37244.jpg'
  },
  {
    id: 'johnny-gargano',
    brandIds: ['raw'],
    name: 'Johnny Gargano',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2018/06/Johnny_Gargano_bio--4acb9c0789c30db578d2ac0ec78e520f.jpg'
  },

  {
    id: 'riho',
    gender: 'FEMALE',
    brandIds: ['aew'],
    name: 'Riho',
    points: 83,
    image:
      '//upload.wikimedia.org/wikipedia/en/thumb/4/40/RihoWrestler.2015Croppedpng.png/800px-RihoWrestler.2015Croppedpng.png'
  },
  {
    id: 'mustafa-ali',
    brandIds: ['smackdown'],
    alignment: ALIGNMENTS.BAD,
    name: 'Mustafa Ali',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/05/Ali-bio--225fb3d7977dde86aa82172ae7071648.jpg'
  },
  {
    id: 'ricochet',
    brandIds: ['smackdown'],
    name: 'Ricochet ',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/04/Ricochet-bio--a036c6b7944f025ca29888479bfe473c.jpg'
  },
  {
    id: 'bobby-roode',
    brandIds: ['raw'],
    name: 'Robert Roode',
    alignment: ALIGNMENTS.BAD,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/04/Robert_Roode-bio--632add86f7ecd0179fce75f416d526e3.jpg'
  },
  {
    id: 'santos-escobar',
    brandIds: ['smackdown'],
    name: 'Santos Escobar',
    alignment: ALIGNMENTS.BAD,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2020/06/Santos_Escobar_bio--2ae743140ea98599bdf37810119e53ec.jpg'
  },
  {
    id: 'fabian-aichner',
    brandIds: ['smackdown'],
    name: 'Fabian Aichner',
    alignment: ALIGNMENTS.BAD,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2018/06/Fabian_Achner_bio--5651d7c849dd4de4e18c06dac1ac12f5.jpg',
    wwe: true,
    points: 82
  },
  {
    id: 'dexter-lumis',
    brandIds: ['raw'],
    name: 'Dexter Lumis',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/07/Dexter_Lumis_bio--7f0cb05e55af6f5263e776fad9cf7913.jpg'
  },
  {
    id: 'naomi',
    name: 'Naomi',
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/04/Naomi-bio--fbb75589a338d150449e928906be4519.jpg'
  },
  {
    id: 'angel-garza',
    brandIds: ['smackdown'],
    name: 'Angel',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/06/NXT_06122019ca_2494--384fc2e47dc3fbc2fae4fdc1dc775b51.jpg'
  },
  {
    id: 'mvp',
    brandIds: ['raw'],
    name: 'MVP',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2022/07/mvpprimayr--b48235c307c1d100c0f62e2e17a19ebc.jpg'
  },
  {
    id: 'mandy-rose',
    brandIds: ['nxt'],
    name: 'Mandy Rose',
    points: POINTS.MID_MID,
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/09/064_NXT_09212021BR_29691--3a9b07218b201206db788a149b9251c1.jpg'
  },
  {
    id: 'angelo-dawkins',
    brandIds: ['raw'],
    name: 'Angelo Dawkins',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2017/09/Angelo_Dawkins_bio--ab4c3c59bae6c640d9604e0fc23e9604.jpg'
  },
  {
    id: 'otis',
    brandIds: ['smackdown'],
    name: 'Otis',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/05/Otis_bio--a6430f0bfbe628c490ef5ebb9354e408.jpg'
  },
  {
    id: 'natalya',
    brandIds: ['smackdown'],
    name: 'Natalya',
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2022/02/SD_04302021HM_10614--fd1ced5c4fa27847de85b876452a3335.jpg'
  },
  {
    id: 'happy-corbin',
    brandIds: ['smackdown'],
    name: 'Happy Corbin',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/08/030_SD_08272021CA_27179--1af7f9ae1a7274a216a58b2b457ad256.jpg'
  },
  {
    id: 'tamina',
    brandIds: ['smackdown'],
    name: 'Tamina',
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2022/07/tamina--377a00dc06af06dc77d886219d632240.jpg'
  },
  {
    id: 'chad-gable',
    brandIds: ['raw'],
    name: 'Chad Gable',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/08/031_SD_08132021DG_38735--67d8bcce606e039b0221e5ba6f8f74ba.jpg'
  },
  {
    id: 'cesaro',
    brandIds: ['aew'],
    name: 'Cesaro',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/04/Cesaro_bio--01f0cbda82f7422b60981cb65c558963.jpg'
  },
  {
    id: 'raquel-gonzalez',
    brandIds: ['smackdown'],
    name: 'Raquel Rodriguez ',
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/02/Raquel_Gonzalez_bio--f97b756f74283a3dbf90aa594e62613c.jpg'
  },
  {
    id: 'xia-li',
    name: 'Xia Li',
    brandIds: ['smackdown'],
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/02/Xia_Li_bio--bc01c0ae2200bf949b986b3d22141660.jpg'
  },
  {
    id: 'swerve-scott',
    brandIds: ['aew'],
    name: 'Swerve Scott',
    alignment: -1,
    points: 80
  },
  {
    id: 'ludwig-kaiser',
    name: 'Ludwig Kaiser',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2022/04/019_SD_04082022HM_18718--687eaad21ffba3f0b65e0459ebaa6e4f.jpg'
  },
  {
    id: 'roderick-strong',
    brandIds: ['nxt'],
    name: 'Roderick Strong',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/03/Roderick_Strong_bio--324bf9d3b49b453ead59a11c13687247.jpg'
  },
  {
    id: 'bobby-fish',
    brandIds: ['impact'],
    name: 'Bobby Fish',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/06/Bobby_Fish_bio--6d2bf67b8f29bc580e14ab472bfad15b.jpg'
  },
  {
    id: 'drake-maverick',
    name: 'Drake Maverick',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/02/Drake_Maverick_bio--33a7d711d1f6d51e96ac24bbd691360b.jpg'
  },
  {
    id: 'angelico',
    name: 'Angelico',
    points: 80,
    image:
      '//vignette.wikia.nocookie.net/prowrestling/images/b/b2/Angelico2015.jpg/revision/latest?cb=20170619185447'
  },
  {
    id: 'chuck-taylor',
    brandIds: ['aew'],
    name: 'Chuck Taylor',
    points: 80,
    image:
      '//vignette.wikia.nocookie.net/prowrestling/images/6/6b/ChuckieT.jpg/revision/latest?cb=20171109043244'
  },
  {
    id: 'ethan-page',
    brandIds: ['aew'],
    name: 'Ethan Page',
    points: '80'
  },
  {
    id: 'evil-uno',
    brandIds: ['aew'],
    name: 'Evil Uno',
    points: 80,
    image:
      '//vignette.wikia.nocookie.net/mcuff/images/e/ee/Evil_uno_b00_by_tiorollins07_ddkkcka-fullview.png/revision/latest?cb=20191121104923'
  },
  {
    id: 'isiah-kassidy',
    brandIds: ['aew'],
    name: 'Isiah Kassidy',
    points: 80,
    image:
      '//vignette.wikia.nocookie.net/mcuff/images/6/61/Ddk6s9e-8998e1fc-daab-4ae2-89a4-5547132b7816.png/revision/latest?cb=20191114112413'
  },
  {
    id: 'jimmy-havoc',
    brandIds: ['aew'],
    name: 'Jimmy Havoc',
    points: 80,
    image:
      '//vignette.wikia.nocookie.net/whatculture-wrestling/images/e/ea/Jimmy_Havoc_17_cut_by_Danger_Liam_2.png/revision/latest?cb=20170707123754'
  },
  {
    id: 'kip-sabian',
    brandIds: ['aew'],
    name: 'Kip Sabian',
    points: 80,
    image:
      '//vignette.wikia.nocookie.net/whatculture-wrestling/images/9/9c/Kip_Sabian.png/revision/latest?cb=20180916104521'
  },
  {
    id: 'marko-stunt',
    brandIds: ['aew'],
    name: 'Marko Stunt',
    points: 80,
    image:
      '//images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/99a2efd3-c027-4635-9e0d-c94060e35803/dd2r7oy-ed2e2078-43db-4698-ae3f-e7bbf74a1d2a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOTlhMmVmZDMtYzAyNy00NjM1LTllMGQtYzk0MDYwZTM1ODAzXC9kZDJyN295LWVkMmUyMDc4LTQzZGItNDY5OC1hZTNmLWU3YmJmNzRhMWQyYS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Z3kcWgHRsKAS8ReXPxAbFQbmDgMdoLO504f74TPLCE0'
  },
  {
    id: 'michael-nakazawa',
    brandIds: ['aew'],
    name: 'Michael Nakazawa',
    points: 80,
    image:
      '//vignette.wikia.nocookie.net/mcuff/images/b/bb/Michael_nakazawa_b00_by_tiorollins07_ddkkaey-fullview.png/revision/latest?cb=20200527090524'
  },
  {
    id: 'shawn-spears',
    brandIds: ['aew'],
    name: 'Shawn Spears',
    points: 80,
    image:
      '//images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/98a6e8ba-294f-44c2-b878-23e230138aca/ddrnztk-fb763435-a5e8-495f-8146-02d9e2afc666.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOThhNmU4YmEtMjk0Zi00NGMyLWI4NzgtMjNlMjMwMTM4YWNhXC9kZHJuenRrLWZiNzYzNDM1LWE1ZTgtNDk1Zi04MTQ2LTAyZDllMmFmYzY2Ni5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.baVePeaf2xMgUU69ZMlI0eVhVyHPGXdNoZqcbR4qbXI'
  },
  {
    id: 'big-swole',
    gender: 'FEMALE',
    brandIds: ['aew'],
    name: 'Big Swole',
    points: 80,
    image:
      '//images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/98a6e8ba-294f-44c2-b878-23e230138aca/ddps47e-3c73a833-4733-45e7-99aa-9dbfb40fb52f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOThhNmU4YmEtMjk0Zi00NGMyLWI4NzgtMjNlMjMwMTM4YWNhXC9kZHBzNDdlLTNjNzNhODMzLTQ3MzMtNDVlNy05OWFhLTlkYmZiNDBmYjUyZi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.450KW_GuvtWFAxlqdhWLE9UlJLHA3hkHztphi7gdy2o'
  },
  {
    id: 'karrion-kross',
    brandIds: ['smackdown'],
    name: 'Karrion Kross',
    points: 80
  },
  {
    id: 'scarlett',
    brandIds: ['smackdown'],
    name: 'Scarlett',
    points: 80,
    gender: 'FEMALE'
  },
  {
    id: 'mansoor',
    brandIds: ['smackdown'],
    name: 'SMÅN.SÔÖR',
    points: 80
  },
  {
    id: 'ashante-adonis',
    brandIds: ['smackdown'],
    name: 'Ashante Adonis',
    points: 80
  },
  {
    id: 'b-fab',
    brandIds: ['smackdown'],
    name: 'B-FAB',
    points: 80,
    gender: 'FEMALE'
  },
  {
    id: 'emi-sakura',
    name: 'Emi Sakura',
    gender: 'FEMALE',
    points: 80,
    image:
      '//vignette.wikia.nocookie.net/mcuff/images/1/16/Emi_sakura_b00_by_tiorollins07_ddkkcvp-fullview.png/revision/latest?cb=20200527091557'
  },
  {
    id: 'leva-bates',
    gender: 'FEMALE',
    name: 'Leva Bates',
    points: 80,
    image:
      '//images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ce33d7dc-eeb1-4900-be73-3c00611e37af/db55l9e-3e67dd76-370d-4f94-9923-16921bf09959.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvY2UzM2Q3ZGMtZWViMS00OTAwLWJlNzMtM2MwMDYxMWUzN2FmXC9kYjU1bDllLTNlNjdkZDc2LTM3MGQtNGY5NC05OTIzLTE2OTIxYmYwOTk1OS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.xHUCxYtNnIBgDPyTzvSZKex58GnKcv7ndwadhh8FnfA'
  },
  {
    id: 'sadie-gibbs',
    gender: 'FEMALE',
    name: 'Sadie Gibbs',
    points: 80,
    image:
      '//images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/98a6e8ba-294f-44c2-b878-23e230138aca/ddn3w8h-af0851e4-a1c7-4ba4-b19c-c07c2828fcea.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOThhNmU4YmEtMjk0Zi00NGMyLWI4NzgtMjNlMjMwMTM4YWNhXC9kZG4zdzhoLWFmMDg1MWU0LWExYzctNGJhNC1iMTljLWMwN2MyODI4ZmNlYS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.xnF1OrJbtFQzhO3A_9NJIkpeQ2B_deWp_vzkEzZfuzg'
  },
  {
    id: 'meiko-satomura',
    brandIds: ['nxt'],
    gender: 'FEMALE',
    name: 'Meiko Satomura',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/02/001_NXTUK_London_01112021AT_1520--e11ab87f59fdcee7ce854206f3117d8e.jpg'
  },
  {
    id: 'noam-dar',
    brandIds: ['nxt'],
    name: 'Noam Dar',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/02/NXTUK_London_09022020at_0905--01a025783046acb0d50455bad9fb6255.jpg'
  },
  {
    id: 'ilja-dragunov',
    brandIds: ['nxt'],
    name: 'Ilja Dragunov ',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/08/NXTUK_Glasgow_04192019at_3927--30df32e0d5d19b7fd884992d63274d89.jpg'
  },
  {
    id: 'gigi-dolin',
    name: 'Gigi Dolin',
    brandIds: ['nxt'],
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/10/Gigi_Dolin_bio--81c556d710fe1e7abac33549205dfb8c.jpg'
  },
  {
    id: 'zelina-vega',
    brandIds: ['smackdown'],
    name: 'Queen Zelina',
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2022/07/zelina2--077579028a7c0aa3bd6b4deebc25fc27.jpg'
  },
  {
    id: 'alicia-taylor',
    brandIds: ['nxt'],
    name: 'Alicia Taylor',
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/08/Alica_Taylor_bio--be2cfbe7bed91a19ad86599b2575f0df.jpg'
  },
  {
    id: 'amale',
    brandIds: ['nxt'],
    name: 'Amale',
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/02/029_NXTUK_London_01112021AT_1827--ded78ffbb92f5422ce9b2e2de7e48b1d.jpg'
  },
  {
    id: 'amari-miller',
    brandIds: ['nxt'],
    name: 'Amari Miller',
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/10/012_205_09032021CG_22619--19723339e572ced62c79db873a751487.JPG'
  },
  {
    id: 'andre-chase',
    brandIds: ['nxt'],
    name: 'Andre Chase',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/11/Andre_Chase_Bio--a11217c948fc73bd5ea9a5b6c7865f93.jpg'
  },
  {
    id: 'aoife-valkyrie',
    brandIds: ['nxt'],
    name: 'Aoife Valkyrie',
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/04/032_NXTUK_London_03292021AT_0590--9a06592a73473643826ede599f31d284.jpg'
  },
  {
    id: 'ashton-smith',
    brandIds: ['nxt'],
    name: 'Ashton Smith',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/02/NXTUK_London_09022020at_1687--9ec59298e0b427ef971f6256d87e94f9.jpg'
  },
  {
    id: 'beth-phoenix',
    brandIds: ['nxt'],
    name: 'Beth Phoenix',
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/06/MMC_01092018ca_0100--2ca87a8b7cd5bb883b7dd9b8848563d7.jpg'
  },
  {
    id: 'boa',
    brandIds: ['nxt'],
    name: 'Boa',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/07/Boa_bio--8a342aafd9da326443d87caf54a1f9a4.jpg'
  },
  {
    id: 'blair-davenport',
    brandIds: ['nxt'],
    name: 'Blair Davenport',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/10/001_NXTUK_London_10062021_AT_1464--55a63c1637a2f9f8c22ee5957afd9a74.jpg'
  },
  {
    id: 'brutus-creed',
    brandIds: ['nxt'],
    name: 'Brutus Creed',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/10/Brutus_Creed_bio--4d019031edc807f0e89ff35b21ff1ad8.jpg'
  },
  {
    id: 'charlie-dempsey',
    brandIds: ['nxt'],
    name: 'Charlie Dempsey',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2022/02/Charlie_Dempsey_Bio--db4b99b53b5913ffb8938fbdaa2d004b.jpg'
  },
  {
    id: 'dani-luna',
    brandIds: ['nxt'],
    name: 'Dani Luna',
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/04/044_NXTUK_London_02092021AT_3966--ced7b646ac36aff8a3802d0b86450119.jpg'
  },
  {
    id: 'cora-jade',
    brandIds: ['nxt'],
    name: 'Cora Jade',
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2022/08/cora_primary--5e9d59a6f4ed121b72b572cff5f27bd9.jpg'
  },
  {
    id: 'dave-mastiff',
    brandIds: ['nxt'],
    name: 'Dave Mastiff',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2018/10/UKCT_06182018at_0359--264025c847fed7aef531b6437e454030.jpg'
  },
  {
    id: 'duke-hudson',
    brandIds: ['nxt'],
    name: 'Duke Hudson',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/12/Duke_Hudson_bio--82e038a76e2f96ee8a9b4fdcdc7f330a.jpg'
  },
  {
    id: 'eddie-dennis',
    brandIds: ['nxt'],
    name: 'Eddie Dennis ',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2018/11/020_NXTUK_CambridgeDay2_at_2463--91c93aaed5154330db71cae08eb4da27.jpg'
  },
  {
    id: 'elektra-lopez',
    brandIds: ['nxt'],
    name: 'Elektra Lopez',
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/09/Elektra_Lopez_bio--5afe567602a85ea2592c77c13ce6eb23.jpg'
  },
  {
    id: 'grayson-waller',
    brandIds: ['nxt'],
    name: 'Grayson Waller',
    points: POINTS.MID_MID,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/11/001_205_07202021AK_01121--3927f8ed32bd517fd2ed29f31c58a6bd.jpg'
  },
  {
    id: 'gunther',
    brandIds: ['smackdown'],
    name: 'Gunther ',
    points: POINTS.MAIN_BOTTOM,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/02/NXTUK_Blackpool_01132019at_2277--f95d90aeaf4a95bcf80b2e35de4f9f80.jpg'
  },
  {
    id: 'indi-hartwell',
    brandIds: ['nxt'],
    name: 'Indi Hartwell',
    points: POINTS.MID_MID,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2020/07/022_NXT_07152020CG_03185--847e70bce1f68b5f730e59a3cf681902.jpg'
  },
  {
    id: 'isla-dawn',
    brandIds: ['nxt'],
    points: POINTS.MID_MID,
    name: 'Isla Dawn',
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2018/10/UKCT_06182018rf_1475b--6679f8f1137fd8b2296091019fde6900.jpg'
  },
  {
    id: 'ivy-nile',
    brandIds: ['nxt'],
    points: POINTS.MID_MID,
    gender: 'FEMALE',
    name: 'Ivy Nile',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/10/Ivy_Nile_bio--a0e90f74f88e46415621bb914ecc478c.jpg'
  },
  {
    id: 'jacy-jayne',
    brandIds: ['nxt'],
    name: 'Jacy Jayne',
    points: POINTS.MID_BOTTOM,
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/10/Jacy_Jane_bio--9846aa3bcd6c8b39644ab3b1dd53eacb.jpg'
  },
  {
    id: 'jinny',
    brandIds: ['nxt'],
    name: 'Jinny',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2018/11/UKCT_06182018rf_1477--1e3433eb64c86a46c1406869de587b8e.jpg'
  },
  {
    id: 'joe-coffey',
    brandIds: ['nxt'],
    name: 'Joe Coffey',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2018/10/UKCT_06182018at_0347--e2ddb07b0eeb62673a764e51afa5fd4a.jpg'
  },
  {
    id: 'joe-gacy',
    brandIds: ['nxt'],
    name: 'Joe Gacy',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/10/Joe_Gacy_bio--d069370f941bab57ea9c9bb76e71a1b2.jpg'
  },
  {
    id: 'julius-creed',
    brandIds: ['nxt'],
    name: 'Julius Creed',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/10/Julius_Creed_bio--f37c1b1b1ff165f333672d8145341157.jpg'
  },
  {
    id: 'lash-legend',
    brandIds: ['nxt'],
    name: 'Lash Legend',
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/12/002_205_12102021PM_16503--fb80bb8b77ad656f556a8b9a64548eb8.jpg'
  },
  {
    id: 'mark-coffey',
    brandIds: ['nxt'],
    name: 'Mark Coffey',
    points: POINTS.MID_MID,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2018/10/NXT_06102018at_2242--65fa7a410e12dcf7b207deb41d90e354.jpg'
  },
  {
    id: 'nikkita-lyons',
    brandIds: ['nxt'],
    name: 'Nikkita Lyons',
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2022/03/Nikkita_Lyons_bio--dc654dc2ff468caaf1ba4955184ec11f.jpg'
  },
  {
    id: 'nina-samuels',
    brandIds: ['nxt'],
    name: 'Nina Samuels',
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2018/10/NXT_06092018at_2974--4555cd8601865ad21d7bea59345b720d.jpg'
  },
  {
    id: 'saraya',
    brandIds: ['aew'],
    name: 'Saraya',
    points: POINTS.BOTTOM_BOTTOM,
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2018/06/Paige_bio--ad66c2e842f93608125275665332fe5c.jpg'
  },
  {
    id: 'rampage-brown',
    name: 'Rampage Brown',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/02/NXTUK_London_10132020AT_2613--d71f27475944edc8a5a03d9219846b73.jpg'
  },
  {
    id: 'rick-boogs',
    brandIds: ['smackdown'],
    points: POINTS.MID_BOTTOM,
    name: 'Rick Boogs',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/09/SD_09032021CG_16960--3f05c5f3aee73a3cb04906965242df6f.JPG'
  },
  {
    id: 'ridge-holland',
    brandIds: ['smackdown'],
    points: POINTS.MID_BOTTOM,
    name: 'Ridge Holland',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/02/NXTUK_Hull_11152019at_1360--1833f4bc56bc61898441aaad446f62af.jpg'
  },
  {
    id: 'sarray',
    brandIds: ['nxt'],
    name: 'Sarray',
    gender: 'FEMALE',
    points: 40,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/05/Sarray_bio--68137607b464f5efeb8d2d88dade454d.jpg'
  },
  {
    id: 'shanky',
    name: 'Shanky',
    brandIds: ['aew'],
    points: POINTS.MID_BOTTOM,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/09/056_SS_08212021HM_24948--b077cd58221aa1ff9f21722eee87721c.jpg'
  },
  {
    id: 'solo-sikoa',
    brandIds: ['smackdown'],
    points: POINTS.MID_TOP,
    name: 'Solo Sikoa',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/11/Solo_Sikoa_bio--925e5a0c3b05688497a70264e2910ec9.jpg'
  },
  {
    id: 'tony-dangelo',
    brandIds: ['nxt'],
    points: POINTS.MID_BOTTOM,
    name: "Tony D'Angelo",
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/10/Tony_DAngelo_bio--23c277a9292543415e07ec6b971620cf.jpg'
  },
  {
    id: 'tyler-bate',
    brandIds: ['nxt'],
    points: POINTS.MID_MID,
    name: 'Tyler Bate',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2017/10/TylerBate_Bio--57f44293f2094fcba3cecc3460f8861c.jpg'
  },
  {
    id: 'trick-williams',
    brandIds: ['nxt'],
    name: 'Trick Williams',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/10/Trick_Williams_bio--b65aba4f2546ffa2a18e530f7fac32cc.jpg'
  },
  {
    id: 'von-wagner',
    brandIds: ['nxt'],
    name: 'Von Wagner',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/10/Von_Wagner_bio--62ec95dec48a58b19ec2d8a3b4b55ae7.jpg'
  },
  {
    id: 'wendy-choo',
    brandIds: ['nxt'],
    name: 'Wendy Choo',
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2022/02/WendyChoo_Bio--9ee5f0f864fd8a1216dbc414fa0a4296.jpg'
  },
  {
    id: 'wes-lee',
    brandIds: ['nxt'],
    name: 'Wes Lee',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2022/04/Wes_Lee_bio--830e71ef543d09c85f9276497ac99db8.jpg'
  },
  {
    id: 'bad-news-barrett',
    brandIds: ['smackdown'],
    name: 'Wade Barrett',
    points: POINTS.ANNOUNCER,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2020/09/NXT_08262020JG_59569-1--f2c721f1c80a3fb599979d5c9cf6a3cd.jpg'
  },
  {
    id: 'xyon-quinn',
    brandIds: ['nxt'],
    points: POINTS.MID_BOTTOM,
    name: 'Xyon Quinn',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/10/Xyon_Quinn_bio--31cc0f79e089205d3537dbe5b3ccabc2.jpg'
  },
  {
    id: 'zack-gibson',
    brandIds: ['nxt'],
    name: 'Rip Fowler',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2022/09/Rip_Fowler_bio--ddc98f6013f1a0cf48204d9f83c961ed.jpg'
  },
  {
    id: 'triple-h',
    name: 'Triple H',
    brandIds: ['nxt', 'raw', 'smackdown'],
    points: POINTS.ANNOUNCER,
    entranceVideoEmbedId: 'FM2WB0AyAjA',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Triple_H_bio.png'
  },
  {
    id: 'shelton-benjamin',
    brandIds: ['raw'],
    name: 'Shelton Benjamin',
    points: POINTS.MID_MID,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2017/09/Shelton_Benjamin_bio--471a53af046fe3bd2fbe2211d62c0a8c.jpg'
  },
  {
    id: 'colt-cabana',
    brandIds: ['roh'],
    name: 'Colt Cabana',
    points: POINTS.MID_MID,
    image:
      '//d2isjg8ovcm7q0.cloudfront.net/sites/default/files/colt-cabana2.png'
  },
  {
    id: 'drew-gulak',
    brandIds: ['smackdown'],
    points: POINTS.MID_BOTTOM,
    name: 'Drew Gulak',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/08/205_07232019ca_6877--e1ee0caacfb81a2d57cb154ba3332c74.jpg'
  },
  {
    id: 'ivar',
    brandIds: ['smackdown'],
    points: POINTS.MID_BOTTOM,
    name: 'Ivar',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/04/Ivar_bio--6a30a41be3e1b5a4668f378a5594888d.jpg'
  },
  {
    id: 'erik',
    brandIds: ['smackdown'],
    points: POINTS.MID_BOTTOM,
    name: 'Erik',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/04/Erik_bio--a06f581a85951f96a98ffc22d40641ed.jpg'
  },
  {
    id: 'nikki-ash',
    gender: 'FEMALE',
    brandIds: ['raw'],
    points: POINTS.MID_BOTTOM,
    name: 'Nikki A.S.H.',
    image:
      '//www.wwe.com/f/styles/talent_champion_lg/public/all/2021/07/CROSS_06282021jg_0047_Nikki_Cross_Profile--0601b6e174fd6ed35d78b779b6156d7c.png',
    cost: 70
  },
  {
    id: 'carmella',
    brandIds: ['raw'],
    name: 'Carmella',
    points: POINTS.MID_BOTTOM,
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2022/02/SD_05072021PM_17731--4a48fabeaf92ff5ec51a555df4fb091c.jpg'
  },
  {
    id: 'montez-ford',
    brandIds: ['raw'],
    name: 'Montez Ford',
    points: POINTS.MID_MID,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2017/09/Montez_Ford_bio--dc9875c58e5e7001274c6ca737b7046b.jpg'
  },
  {
    id: 'akira-tozawa',
    brandIds: ['raw'],
    name: 'Akira Tozawa',
    points: POINTS.BOTTOM_TOP,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2017/10/Akira_Tozawa_bio--2703af90f4dedfdf434e9b5aa38d9b33.jpg'
  },
  {
    id: 'omos',
    brandIds: ['raw'],
    points: POINTS.MID_TOP,
    alignment: ALIGNMENTS.BAD,
    name: 'Omos',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2022/07/omos--c1fd89dc9a825d93931246b22986f3e0.jpg'
  },
  {
    id: 'sonny-kiss',
    name: 'Sonny Kiss',
    points: POINTS.BOTTOM_BOTTOM,
    brandIds: ['aew'],
    image:
      '//images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/98a6e8ba-294f-44c2-b878-23e230138aca/ddof1yw-29a4a8bd-8350-417d-a8d6-579474bbb71d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOThhNmU4YmEtMjk0Zi00NGMyLWI4NzgtMjNlMjMwMTM4YWNhXC9kZG9mMXl3LTI5YTRhOGJkLTgzNTAtNDE3ZC1hOGQ2LTU3OTQ3NGJiYjcxZC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.YzjTDBYuigdGaytgLyE5CnxzqMegnwVtsZsUt2q99NU'
  },
  {
    id: 'elias',
    name: 'Elias',
    brandIds: ['raw'],
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/05/Elias-bio--1c08ae708d31806e232374f33ed8b3f9.jpg'
  },
  {
    id: 't-bar',
    name: 'T-BAR',
    brandIds: ['smackdown'],
    points: 75,
    image:
      '//www.wwe.com/f/styles/talent_champion_xs/public/all/2021/09/MACE_TBAR_04262021ej_00136_Tbar_Profile--d2cbede433aa80a4500e9e0f15a75dd0.png',
    cost: 70
  },
  {
    id: 'liv-morgan',
    brandIds: ['smackdown'],
    name: 'Liv Morgan',
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2022/08/livprimary2--9985b3f2b3f47cf28a04ed1ea747d608.jpg'
  },
  {
    id: 'jimmy-uso',
    brandIds: ['smackdown'],
    name: 'Jimmy Uso',
    entranceVideoEmbedId: 'tscAN8W0QgU',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/05/Jimmy_Uso-bio--55919dc0cc43977b838e84d5db4746c0.jpg'
  },
  {
    id: 'qt-marshall',
    brandIds: ['aew'],
    name: 'QT Marshall',
    points: 75
  },
  {
    id: 'bea-priestly',
    gender: 'FEMALE',
    name: 'Bea Priestley',
    points: 75
  },
  {
    id: 'trent-seven',
    name: 'Trent Seven',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2022/07/seven--4b2aa70d0986d55da81338322042390a.jpg'
  },
  {
    id: 'dominik-mysterio',
    brandIds: ['raw'],
    name: 'Dominik Mysterio',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2020/09/PAY_08302020ca_09012--54316235a619d4726aae200125a5e10a.jpg'
  },
  {
    id: 'gran-metalik',
    name: 'Gran Metalik',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/01/Gran_Metalik_Bio--3928f03ddef719128ab420aeaf169767.jpg'
  },
  {
    id: 'cedric-alexander',
    name: 'Cedric Alexander',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/04/Cedric_Alexander_bio--c1a7908563b1fc97db5210af4a1b774c.jpg'
  },
  {
    id: 'maryse',
    name: 'Maryse',
    gender: 'FEMALE',
    points: 40,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/2016/04/Maryse_bio--53d4b95fffae36897b53dee74fc93480.jpg'
  },
  {
    id: 'dana-brooke',
    name: 'Dana Brooke',
    gender: 'FEMALE',
    points: 40,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/2016/05/Dana_Brooke_bio--f5f84a5a733977677888d21313bfa1f2.jpg'
  },
  {
    id: 'la-knight',
    brandIds: ['smackdown'],
    name: 'LA Knight',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2022/07/maxdupri--60bd791efd1b08f12815380252f984cb.jpg'
  },
  {
    id: 'dakota-kai',
    brandIds: ['raw'],
    name: 'Dakota Kai',
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/12/Dakota_Kai_bio--5e6d364c3a19ebc1f9d1b1d63a319588.jpg'
  },
  {
    id: 'alex-reynolds',
    name: 'Alex Reynolds',
    points: 70,
    image:
      '//vignette.wikia.nocookie.net/prowrestling/images/c/cd/ALEX_REYNOLDS_-_NYCWRESTLING8d47db.png/revision/latest?cb=20180517205925'
  },
  {
    id: 'brandon-cutler',
    name: 'Brandon Cutler',
    points: 70,
    image:
      '//vignette.wikia.nocookie.net/prowrestling/images/7/72/Brandon_Cutler_-_ProfPic2020.png/revision/latest?cb=20200828191121'
  },
  {
    id: 'john-silver',
    brandIds: ['aew'],
    name: 'John Silver',
    points: 70,
    image:
      '//vignette.wikia.nocookie.net/prowrestling/images/4/40/John_Silver_-_8d474600d3.png/revision/latest?cb=20170701213727'
  },
  {
    id: 'peter-avalon',
    name: 'Peter Avalon',
    points: 70,
    image:
      '//images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ecf396fe-0ac8-46ce-a309-a3f5445e7da5/ddjywav-73aa0ff5-ae70-40e3-a9c6-081210e70345.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZWNmMzk2ZmUtMGFjOC00NmNlLWEzMDktYTNmNTQ0NWU3ZGE1XC9kZGp5d2F2LTczYWEwZmY1LWFlNzAtNDBlMy1hOWM2LTA4MTIxMGU3MDM0NS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.DbNd_QbvW3pAiIK5IGNx_ProzI7MI1M1cKSkQq0bV_0'
  },
  {
    id: 'brandi-rhodes',
    gender: 'FEMALE',
    name: 'Brandi Rhodes',
    points: 70,
    image: '//d2isjg8ovcm7q0.cloudfront.net/sites/default/files/brandi-bio.png'
  },
  {
    id: 'shane-mcmahon',
    name: 'Shane McMahon',
    brandIds: ['smackdown', 'raw'],
    points: 70,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2017/04/Shane_McMahon_bio--dd98519dd13d1576c9aba0faa2fb7d5a.jpg'
  },
  {
    id: 'tony-khan',
    brandIds: ['aew'],
    name: 'Tony Khan',
    points: 70,
    image:
      '//static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/jaguars/jt26ywmaiham3uxem0ij'
  },
  {
    id: 'eric-bischoff',
    brandIds: ['wcw'],
    name: 'Eric Bischoff',
    points: 40,
    image:
      '//www.wwe.com/f/styles/talent_champion_lg/public/all/2021/03/sBISCH_00001997_0001_Profile--54526b070e6c973cd60e77e5627615f2.png'
  },
  {
    id: 'pat-mcafee',
    brandIds: [],
    name: 'Pat McAfee',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/07/Pat_McAfee_bio--1f9a51b1dedfe6960816ba1fe80d918a.jpg'
  },
  {
    id: 'veer',
    name: 'Veer',
    brandIds: ['nxt'],
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/09/RAW_08162021JG_29617--48bb2fdd755f11002b1078eb88981440.jpg'
  },
  {
    id: 'r-truth',
    brandIds: ['raw'],
    name: 'R-Truth',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2017/10/RAW_08142017mm_1072--1934b5031bdf402c3b0599e405ab55ce.jpg'
  },
  {
    id: 'aliyah',
    brandIds: ['smackdown'],
    name: 'Aliyah',
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/02/Aliyah_bio--ca6c1918d192562b153aee66dc6179c4.jpg'
  },
  {
    id: 'jinder-mahal',
    brandIds: ['smackdown'],
    name: 'Jinder Mahal',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/01/Jinder_Mahal_Bio--b18c5da31c5ed821345d62542b50e20f.jpg'
  },
  {
    id: 'william-regal',
    brandIds: ['aew'],
    name: 'William Regal',
    points: POINTS.ANNOUNCER,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/William_Regal_bio.png'
  },
  {
    id: 'vickie-guerrero',
    wwe: true,
    brandIds: ['aew'],
    name: 'Vickie Guerrero',
    gender: 'FEMALE',
    points: POINTS.ANNOUNCER,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/2016/03/Vickie_Guerrero_bio--0a44827a757ab9c396a3840685ae44dd.jpg'
  },
  {
    id: 'nikki-bella',
    name: 'Nikki Bella',
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2016/10/Nikki_Bella_bio--28403f1b0d0708650c4238453589a2c5.jpg'
  },
  {
    id: 'brie-bella',
    name: 'Brie Bella',
    gender: 'FEMALE',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Brie_Bella_bio.png'
  },
  {
    id: 'vince-mcmahon',
    wwe: true,
    name: 'Vince McMahon',
    points: POINTS.NO_COMBAT,
    brandIds: ['hall-of-fame'],
    image:
      '//www.wwe.com/f/styles/wwe_16_9_s/public/all/2022/04/283_WM38_04032022RF_18218--fbd3fe75b2d22971d2eb069f27a09c00.jpg'
  },
  {
    id: 'reggie',
    name: 'Reggie',
    points: POINTS.NO_COMBAT,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2022/07/reggie2--233fb356b111311004fa537d1de792d6.jpg'
  },
  {
    id: 'adam-pearce',
    brandIds: ['smackdown', 'raw'],
    name: 'Adam Pearce',
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/04/069_SD_01152021JG_28036--ce110f4a904916474a8417a765711ea1--54dd59c656af9c3b1deac51f1c781d53.jpg'
  },
  {
    id: 'mace',
    brandIds: ['smackdown'],
    name: 'MA.ÇÉ',
    image:
      '//www.wwe.com/f/styles/talent_champion_lg/public/all/2021/09/MACE_TBAR_04262021ej_00044_Mace_Profile--aee511a9e8afbcc0c06959914e3125c7.png',
    points: 25
  },
  {
    id: 'booker-t',
    name: 'Booker T',
    brandIds: ['nxt'],
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Booker_T_bio.png'
  },
  {
    id: 'mike-rome',
    name: 'Mike Rome',
    brandIds: ['smackdown', 'raw'],
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2016/09/Mike_Rome_bio--abd47b6d9382a5dec2d6b5dbd3b48182.jpg'
  },
  {
    id: 'jerry-lawler',
    brandIds: ['smackdown', 'raw'],
    name: 'Jerry Lawler',
    points: POINTS.ANNOUNCER,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2018/02/Jerry_Lawler_bio--31bcec10ae4fa3b12d4b478ecb5e7832.jpg'
  },
  {
    id: 'paul-heyman',
    brandIds: ['smackdown', 'raw'],
    name: 'Paul Heyman',
    points: POINTS.NO_COMBAT,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Paul_Heyman_bio.png'
  },
  {
    id: 'kayla-braxton',
    brandIds: ['smackdown', 'raw'],
    name: 'Kayla Braxton',
    gender: 'FEMALE',
    points: POINTS.ANNOUNCER,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/08/205_06042019hm_0742--b4a01bd5a66372566be888fb29e9350d.jpg'
  },
  {
    id: 'corey-graves',
    brandIds: ['raw'],
    name: 'Corey Graves',
    points: POINTS.NO_COMBAT,
    alignment: ALIGNMENTS.BAD,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2019/01/Corey_Graves_Bio--d1ed81cf137a4ab4071b6998d203b985.jpg'
  },
  {
    id: 'michael-cole',
    brandIds: ['smackdown'],
    name: 'Michael Cole',
    points: POINTS.NO_COMBAT,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Michael_Cole_bio.png'
  },
  {
    id: 'byron-saxton',
    brandIds: ['raw'],
    name: 'Byron Saxton',
    points: POINTS.NO_COMBAT,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Byron_Saxton_bio.png'
  },
  {
    id: 'stephanie-mcmahon',
    name: 'Stephanie McMahon',
    brandIds: ['smackdown', 'raw'],
    gender: 'FEMALE',
    points: POINTS.NO_COMBAT,
    alignment: ALIGNMENTS.BAD,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/rd-talent/Bio/Stephanie_McMahon_bio.png'
  },
  {
    id: 'robert-stone',
    name: 'Mr. Stone',
    points: POINTS.NO_COMBAT,
    image:
      '//www.wwe.com/f/styles/wwe_large/public/all/2021/04/Robert_Stone_bio--5c82f620350b06c66566e65f19361dfb.jpg'
  },
  {
    id: 'karl-anderson',
    name: 'Karl Anderson',
    image:
    '//www.njpw1972.com/wp-content/uploads/2017/03/KarlAnderson_20220518_@AEW_1-2.jpg',
    brandIds: ['raw'],
    wwe: true,
    points: POINTS.MID_MID
  },
  {
    id: 'luke-gallows',
    name: 'Luke Gallows',
    brandIds: ['raw'],
    wwe: true,
    points: POINTS.MID_MID
  },
  {
    id: 'aaron-henare',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/02/henare_20210404_3.jpg',
    brandIds: ['njpw'],
    name: 'Aaron Henare',
    points: POINTS.MID_MID
  },
  {
    id: 'alex-coughlin',
    image:
      '//www.njpw1972.com/wp-content/uploads/2018/10/AlexCoughlin_20220518_1.png',
    brandIds: ['njpw'],
    name: 'Alex Coughlin',
    points: POINTS.MID_MID
  },
  {
    id: 'alex-zayne',
    image:
      '//www.njpw1972.com/wp-content/uploads/2019/11/AlexZayne_20220524_6-1.jpg',
    brandIds: ['njpw'],
    name: 'Alex Zayne',
    points: POINTS.MID_MID
  },
  {
    id: 'bad-dude-tito',
    image:
      '//www.njpw1972.com/wp-content/uploads/2021/11/BadDudeTito_220514_@AEW_2-2.jpg',
    brandIds: ['njpw'],
    name: 'Bad Dude Tito',
    points: POINTS.MID_MID
  },
  {
    id: 'bad-luck-fale',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/02/fale_20210107_3-1.jpg',
    brandIds: ['njpw'],
    name: 'Bad Luck Fale',
    points: POINTS.MID_MID
  },
  {
    id: 'barrett-brown',
    image:
      '//www.njpw1972.com/wp-content/uploads/2019/11/20191114_BarretBrown@free_1.jpg',
    brandIds: ['njpw'],
    name: 'Barrett Brown',
    points: POINTS.MID_MID
  },
  {
    id: 'bateman',
    image:
      '//www.njpw1972.com/wp-content/uploads/2021/01/TylerBateman_20201113_02.jpg',
    brandIds: ['njpw'],
    name: 'BATEMAN',
    points: POINTS.MID_MID
  },
  {
    id: 'blake-christian',
    image:
      '//www.njpw1972.com/wp-content/uploads/2020/08/BlakeChristian_20201113_01.jpg',
    brandIds: ['njpw'],
    name: 'Blake Christian',
    points: POINTS.MID_MID
  },
  {
    id: 'brody-king',
    image:
      '//www.njpw1972.com/wp-content/uploads/2019/01/BrodyKing_20190522_1.png',
    brandIds: ['njpw'],
    name: 'Brody King',
    points: POINTS.MID_MID
  },
  {
    id: 'bushi',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/02/BUSHI_20220513_1-1.jpg',
    brandIds: ['njpw'],
    name: 'BUSHI',
    points: POINTS.MID_MID
  },
  {
    id: 'chase-owens',
    image: '//www.njpw1972.com/wp-content/uploads/2017/02/Chase_20210730_2.png',
    brandIds: ['njpw'],
    name: 'Chase Owens',
    points: POINTS.MID_MID
  },
  {
    id: 'chris-bey',
    image:
      '//www.njpw1972.com/wp-content/uploads/2020/11/ChrisBey_20210831@IMPACT.jpg',
    brandIds: ['njpw'],
    name: 'Chris Bey',
    points: POINTS.MID_MID
  },
  {
    id: 'chris-dickinson',
    image: '//www.njpw1972.com/wp-content/uploads/2021/01/chrisdickinson2.png',
    brandIds: ['njpw'],
    name: 'Chris Dickinson',
    points: POINTS.MID_MID
  },
  {
    id: 'clark-connors',
    image:
      '//www.njpw1972.com/wp-content/uploads/2018/10/ClarkConnors_20220524_3-1.jpg',
    brandIds: ['njpw'],
    name: 'Clark Connors',
    points: POINTS.MID_MID
  },
  {
    id: 'daniel-garcia',
    image:
      '//www.njpw1972.com/wp-content/uploads/2021/08/DanielGarcia_20210520_02.jpg',
    brandIds: ['njpw'],
    name: 'Daniel Garcia',
    points: POINTS.MID_MID
  },
  {
    id: 'danny-limelight',
    image:
      '//www.njpw1972.com/wp-content/uploads/2020/07/DannyLimelight_20210511_02-1.jpg',
    brandIds: ['njpw'],
    name: 'Danny Limelight',
    points: POINTS.MID_MID
  },
  {
    id: 'david-finlay',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/02/Finlay_20220514_@AEW_1.png',
    brandIds: ['njpw'],
    name: 'David Finlay',
    points: POINTS.MID_MID
  },
  {
    id: 'dick-togo',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/03/DickTogo_20200720_4-1.jpg',
    brandIds: ['njpw'],
    name: 'Dick Togo',
    points: POINTS.MID_MID
  },
  {
    id: 'douki',
    image: '//www.njpw1972.com/wp-content/uploads/2019/05/DOUKI_20210107_3.jpg',
    brandIds: ['njpw'],
    name: 'DOUKI',
    points: POINTS.MID_MID
  },
  {
    id: 'el-desperado',
    image: '//www.njpw1972.com/wp-content/uploads/2017/02/Despe_20210311_2.png',
    brandIds: ['njpw'],
    name: 'El Desperado',
    points: POINTS.MID_MID
  },
  {
    id: 'el-phantasmo',
    image:
      '//www.njpw1972.com/wp-content/uploads/2019/04/ElPhantasmo20210107_5.png',
    brandIds: ['njpw'],
    name: 'El Phantasmo',
    points: POINTS.MID_MID
  },
  {
    id: 'evil',
    image: '//www.njpw1972.com/wp-content/uploads/2017/02/EVIL_20211515_1.png',
    brandIds: ['njpw'],
    name: 'EVIL',
    points: POINTS.MID_MID
  },
  {
    id: 'francesco-akira',
    image:
      '//www.njpw1972.com/wp-content/uploads/2022/05/FrancescoAkira_20220524_4.png',
    brandIds: ['njpw'],
    name: 'Francesco Akira',
    points: POINTS.MID_MID
  },
  {
    id: 'fred-rosser',
    image: '//www.njpw1972.com/wp-content/uploads/2020/09/fred.png',
    brandIds: ['njpw'],
    name: 'Fred Rosser',
    points: POINTS.MID_MID
  },
  {
    id: 'gabriel-kidd',
    image:
      '//www.njpw1972.com/wp-content/uploads/2020/01/GabrielKidd_20210413_2.png',
    brandIds: ['njpw'],
    name: 'Gabriel Kidd',
    points: POINTS.MID_MID
  },
  {
    id: 'gedo',
    image: '//www.njpw1972.com/wp-content/uploads/2017/02/gedo_20190718_3.png',
    brandIds: ['njpw'],
    name: 'Gedo',
    points: POINTS.MID_MID
  },
  {
    id: 'great-o-khan',
    image: '//www.njpw1972.com/wp-content/uploads/2019/01/Okhan_20201016_3.png',
    brandIds: ['njpw'],
    name: 'Great-O-Khan',
    points: POINTS.MID_MID
  },
  {
    id: 'hikuleo',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/09/HIKULEO_20190308_3.png',
    brandIds: ['njpw'],
    name: 'Hikuleo',
    points: POINTS.MID_MID
  },
  {
    id: 'hiromu-takahashi',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/02/hiromu_20220301_3.png',
    brandIds: ['njpw'],
    name: 'Hiromu Takahashi',
    points: POINTS.MID_MID
  },
  {
    id: 'hirooki-goto',
    image: '//www.njpw1972.com/wp-content/uploads/2017/02/goto_1.png',
    brandIds: ['njpw'],
    name: 'Hirooki Goto',
    points: POINTS.MID_MID
  },
  {
    id: 'hiroshi-tanahashi',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/02/tanahashi_20220121_2.jpg',
    brandIds: ['njpw'],
    name: 'Hiroshi Tanahashi',
    points: POINTS.MID_MID
  },
  {
    id: 'hiroyoshi-tenzan',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/02/tenzan_20190617_4-1.png',
    brandIds: ['njpw'],
    name: 'Hiroyoshi Tenzan',
    points: POINTS.MID_MID
  },
  {
    id: 'jado',
    image: '//www.njpw1972.com/wp-content/uploads/2017/02/jado_20220705_2.jpg',
    brandIds: ['njpw'],
    name: 'Jado',
    points: POINTS.MID_MID
  },
  {
    id: 'jay-white',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/02/JayWhite_20220211@AEW_3.jpg',
    brandIds: ['njpw'],
    name: 'Jay White',
    points: POINTS.MID_MID
  },
  {
    id: 'jon-moxley',
    image:
      '//www.njpw1972.com/wp-content/uploads/2019/05/JonMoxley_20190605_2.png',
    brandIds: ['njpw'],
    name: 'Jon Moxley',
    points: POINTS.MID_MID
  },
  {
    id: 'jonah',
    image:
      '//www.njpw1972.com/wp-content/uploads/2021/11/JONAH_20220514_@AEW_1.png',
    brandIds: ['njpw'],
    name: 'JONAH',
    points: POINTS.MID_MID
  },
  {
    id: 'jonathan-gresham',
    image:
      '//www.njpw1972.com/wp-content/uploads/2019/01/JonathanGresham_20190222_4.png',
    brandIds: ['njpw'],
    name: 'Jonathan Gresham',
    points: POINTS.MID_MID
  },
  {
    id: 'jorel-nelson',
    image:
      '//www.njpw1972.com/wp-content/uploads/2021/05/Jorel_20210315_01.gif',
    brandIds: ['njpw'],
    name: 'Jorel Nelson',
    points: POINTS.MID_MID
  },
  {
    id: 'jr-kratos',
    image:
      '//www.njpw1972.com/wp-content/uploads/2020/11/JR-Kratos_20210601_1.png',
    brandIds: ['njpw'],
    name: 'JR Kratos',
    points: POINTS.MID_MID
  },
  {
    id: 'juice-robinson',
    image: '//www.njpw1972.com/wp-content/uploads/2017/02/Juice_20220501_1.png',
    brandIds: ['njpw'],
    name: 'Juice Robinson',
    points: POINTS.MID_MID
  },
  {
    id: 'karl-fredericks',
    image:
      '//www.njpw1972.com/wp-content/uploads/2018/10/KarlFredericks_20210930_4.png',
    brandIds: ['njpw'],
    name: 'Karl Fredericks',
    points: POINTS.MID_MID
  },
  {
    id: 'katsuyori-shibata',
    image: '//www.njpw1972.com/wp-content/uploads/2017/02/shibata_01_01-1.png',
    brandIds: ['njpw'],
    name: 'Katsuyori Shibata',
    points: POINTS.MID_MID
  },
  {
    id: 'kazuchika-okada',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/02/okada_20220131_11.png',
    brandIds: ['njpw'],
    name: 'Kazuchika Okada',
    points: POINTS.MID_MID
  },
  {
    id: 'kenta',
    image: '//www.njpw1972.com/wp-content/uploads/2017/04/KENTA_20220705_1.jpg',
    brandIds: ['njpw'],
    name: 'KENTA',
    points: POINTS.MID_MID
  },
  {
    id: 'kevin-knight',
    image:
      '//www.njpw1972.com/wp-content/uploads/2020/12/KevinKnight_20201113_01.png',
    brandIds: ['njpw'],
    name: 'Kevin Knight',
    points: POINTS.MID_MID
  },
  {
    id: 'kosei-fujita',
    image:
      '//www.njpw1972.com/wp-content/uploads/2021/08/FujitaKosei_20211223_1.png',
    brandIds: ['njpw'],
    name: 'Kosei Fujita',
    points: POINTS.MID_MID
  },
  {
    id: 'kota-ibushi',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/03/ibushi_20200907_4-copy.png',
    brandIds: ['njpw'],
    name: 'Kota Ibushi',
    points: POINTS.MID_MID
  },
  {
    id: 'kyle-fletcher',
    image:
      '//www.njpw1972.com/wp-content/uploads/2019/08/KyleFletcherAussie-Open_20190821@ROH.png',
    brandIds: ['njpw'],
    name: 'Kyle Fletcher',
    points: POINTS.MID_MID
  },
  {
    id: 'lio-rush',
    image: '//www.njpw1972.com/wp-content/uploads/2020/11/Lio600x400.png',
    brandIds: ['njpw'],
    name: 'Lio Rush',
    points: POINTS.MID_MID
  },
  {
    id: 'mark-davis',
    image:
      '//www.njpw1972.com/wp-content/uploads/2019/08/MarkDavisAussie-Open_20190821@ROH.png',
    brandIds: ['njpw'],
    name: 'Mark Davis',
    points: POINTS.MID_MID
  },
  {
    id: 'mascara-dorada',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/03/MascaraDorada_20220217_1.png',
    brandIds: ['njpw'],
    name: 'Mascara Dorada',
    points: POINTS.MID_MID
  },
  {
    id: 'master-wato',
    image: '//www.njpw1972.com/wp-content/uploads/2020/07/wato_20210901_3.jpg',
    brandIds: ['njpw'],
    name: 'Master Wato',
    points: POINTS.MID_MID
  },
  {
    id: 'mikey-nicholls',
    image:
      '//www.njpw1972.com/wp-content/uploads/2019/02/MikeyNicholls_20190308_5-1.png',
    brandIds: ['njpw'],
    name: 'Mikey Nicholls',
    points: POINTS.MID_MID
  },
  {
    id: 'minoru-suzuki',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/02/suzuki_20200907_2.jpg',
    brandIds: ['njpw'],
    name: 'Minoru Suzuki',
    points: POINTS.MID_MID
  },
  {
    id: 'misterioso',
    image:
      '//www.njpw1972.com/wp-content/uploads/2019/11/20191114_Misterioso@free_1.png',
    brandIds: ['njpw'],
    name: 'Misterioso',
    points: POINTS.MID_MID
  },
  {
    id: 'ren-narita',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/02/Narita_20210930_1.png',
    brandIds: ['njpw'],
    name: 'Ren Narita',
    points: POINTS.MID_MID
  },
  {
    id: 'robbie-eagles',
    image:
      '//www.njpw1972.com/wp-content/uploads/2018/10/RobbieEagles_20201120_3.png',
    brandIds: ['njpw'],
    name: 'Robbie Eagles',
    points: POINTS.MID_MID
  },
  {
    id: 'rocky-romero',
    image: '//www.njpw1972.com/wp-content/uploads/2017/02/rocky_20210830_4.png',
    brandIds: ['njpw'],
    name: 'Rocky Romero',
    points: POINTS.MID_MID
  },
  {
    id: 'royce-isaacs',
    image:
      '//www.njpw1972.com/wp-content/uploads/2021/05/RoyceIsaacs_20220514_@AEW_1.png',
    brandIds: ['njpw'],
    name: 'Royce Isaacs',
    points: POINTS.MID_MID
  },
  {
    id: 'ryohei-oiwa',
    image:
      '//www.njpw1972.com/wp-content/uploads/2021/08/OiwaRyohei_20211223_4.png',
    brandIds: ['njpw'],
    name: 'Ryohei Oiwa',
    points: POINTS.MID_MID
  },
  {
    id: 'ryu-lee',
    image:
      '//www.njpw1972.com/wp-content/uploads/2019/12/DragonLee_2018122_1.png',
    brandIds: ['njpw'],
    name: 'Ryu Lee',
    points: POINTS.MID_MID
  },
  {
    id: 'ryusuke-taguchi',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/02/taguchi_20210901_3.jpg',
    brandIds: ['njpw'],
    name: 'Ryusuke Taguchi',
    points: POINTS.MID_MID
  },
  {
    id: 'sanada',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/02/sanada_20220120_6.jpg',
    brandIds: ['njpw'],
    name: 'SANADA',
    points: POINTS.MID_MID
  },
  {
    id: 'satoshi-kojima',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/02/kojima_20210303_1.png',
    brandIds: ['njpw'],
    name: 'Satoshi Kojima',
    points: POINTS.MID_MID
  },
  {
    id: 'shane-haste',
    image:
      '//www.njpw1972.com/wp-content/uploads/2022/03/ShaneHaste_20220217_3.png',
    brandIds: ['njpw'],
    name: 'Shane Haste',
    points: POINTS.MID_MID
  },
  {
    id: 'shingo-takagi',
    image:
      '//www.njpw1972.com/wp-content/uploads/2018/10/takagi_20220318_3.png',
    brandIds: ['njpw'],
    name: 'Shingo Takagi',
    points: POINTS.MID_MID
  },
  {
    id: 'sho',
    image: '//www.njpw1972.com/wp-content/uploads/2017/09/sho_20210921_05.png',
    brandIds: ['njpw'],
    name: 'SHO',
    points: POINTS.MID_MID
  },
  {
    id: 'shota-umino',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/03/umino_20190811_5-2.png',
    brandIds: ['njpw'],
    name: 'Shota Umino',
    points: POINTS.MID_MID
  },
  {
    id: 's-w-3-rve',
    image: '//www.njpw1972.com/wp-content/uploads/2022/02/Sw3rve_202201_1.png',
    brandIds: ['njpw'],
    name: 'SW3RVE',
    points: POINTS.MID_MID
  },
  {
    id: 'taichi',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/02/taichi_20210730_2.png',
    brandIds: ['njpw'],
    name: 'Taichi',
    points: POINTS.MID_MID
  },
  {
    id: 'taiji-ishimori',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/04/ishimori_20220121_5.png',
    brandIds: ['njpw'],
    name: 'Taiji Ishimori',
    points: POINTS.MID_MID
  },
  {
    id: 'taka-michinoku',
    image: '//www.njpw1972.com/wp-content/uploads/2017/02/TAKA_20211130_4.png',
    brandIds: ['njpw'],
    name: 'TAKA Michinoku',
    points: POINTS.MID_MID
  },
  {
    id: 'tama-tonga',
    image: '//www.njpw1972.com/wp-content/uploads/2017/02/tama_20220404_1.png',
    brandIds: ['njpw'],
    name: 'Tama Tonga',
    points: POINTS.MID_MID
  },
  {
    id: 'tanga-loa',
    image: '//www.njpw1972.com/wp-content/uploads/2017/02/loa_20220409_2.png',
    brandIds: ['njpw'],
    name: 'Tanga Loa',
    points: POINTS.MID_MID
  },
  {
    id: 'tetsuya-naito',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/02/naito_20220121_suit_5.jpg',
    brandIds: ['njpw'],
    name: 'Tetsuya Naito',
    points: POINTS.MID_MID
  },
  {
    id: 'the-dkc',
    image: '//www.njpw1972.com/wp-content/uploads/2020/07/DKC_20210520_01.png',
    brandIds: ['njpw'],
    name: 'The DKC',
    points: POINTS.MID_MID
  },
  {
    id: 'tiger-mask',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/02/tigermask_20211130_2.png',
    brandIds: ['njpw'],
    name: 'Tiger Mask',
    points: POINTS.MID_MID
  },
  {
    id: 'tit-n',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/06/Titan_20220421_4※©CMLL表記必要.png',
    brandIds: ['njpw'],
    name: 'Titán',
    points: POINTS.MID_MID
  },
  {
    id: 'tjp',
    image: '//www.njpw1972.com/wp-content/uploads/2019/07/TJP_20220524_5.png',
    brandIds: ['njpw'],
    name: 'TJP',
    points: POINTS.MID_MID
  },
  {
    id: 'togi-makabe',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/02/makabe_20211130_5.png',
    brandIds: ['njpw'],
    name: 'Togi Makabe',
    points: POINTS.MID_MID
  },
  {
    id: 'tom-lawlor',
    image:
      '//www.njpw1972.com/wp-content/uploads/2020/07/TomLawlor_20220514_@AEW_1.png',
    brandIds: ['njpw'],
    name: 'Tom Lawlor',
    points: POINTS.MID_MID
  },
  {
    id: 'tomoaki-honma',
    image: '//www.njpw1972.com/wp-content/uploads/2017/02/honma_20220318_4.png',
    brandIds: ['njpw'],
    name: 'Tomoaki Honma',
    points: POINTS.MID_MID
  },
  {
    id: 'tomohiro-ishii',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/02/ishii_20170616_02-1.png',
    brandIds: ['njpw'],
    name: 'Tomohiro Ishii',
    points: POINTS.MID_MID
  },
  {
    id: 'toru-yano',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/02/yano_20190616_2-1.png',
    brandIds: ['njpw'],
    name: 'Toru Yano',
    points: POINTS.MID_MID
  },
  {
    id: 'volador-jr',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/03/VoladorJr_20191016_3-1.png',
    brandIds: ['njpw'],
    name: 'Volador Jr.',
    points: POINTS.MID_MID
  },
  {
    id: 'wheeler-yuta',
    image:
      '//www.njpw1972.com/wp-content/uploads/2021/04/WheelerYuta_20210625@AEW_2.png',
    brandIds: ['njpw'],
    name: 'Wheeler Yuta',
    points: POINTS.MID_MID
  },
  {
    id: 'will-ospreay',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/02/ospreay_20220309_3.png',
    brandIds: ['njpw'],
    name: 'Will Ospreay',
    points: POINTS.MID_MID
  },
  {
    id: 'yoh',
    image: '//www.njpw1972.com/wp-content/uploads/2017/09/YOH_20211129_3.png',
    brandIds: ['njpw'],
    name: 'YOH',
    points: POINTS.MID_MID
  },
  {
    id: 'yoshi-hashi',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/02/YoshiHashi_20211026_2.png',
    brandIds: ['njpw'],
    name: 'YOSHI-HASHI',
    points: POINTS.MID_MID
  },
  {
    id: 'yoshinobu-kanemaru',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/02/kanemaru_20190423_3-1.png',
    brandIds: ['njpw'],
    name: 'Yoshinobu Kanemaru',
    points: POINTS.MID_MID
  },
  {
    id: 'yota-tsuji',
    image: '//www.njpw1972.com/wp-content/uploads/2018/03/tsuji_20200803_4.png',
    brandIds: ['njpw'],
    name: 'Yota Tsuji',
    points: POINTS.MID_MID
  },
  {
    id: 'yuji-nagata',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/02/nagata_20220526_3.png',
    brandIds: ['njpw'],
    name: 'Yuji Nagata',
    points: POINTS.MID_MID
  },
  {
    id: 'yujiro-takahashi',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/02/yujiro_20210329_4-1.png',
    brandIds: ['njpw'],
    name: 'Yujiro Takahashi',
    points: POINTS.MID_MID
  },
  {
    id: 'yuto-nakashima',
    image:
      '//www.njpw1972.com/wp-content/uploads/2021/02/NakashimaYuto_20211222_2.png',
    brandIds: ['njpw'],
    name: 'Yuto Nakashima',
    points: POINTS.MID_MID
  },
  {
    id: 'yuya-uemura',
    image:
      '//www.njpw1972.com/wp-content/uploads/2017/02/Uemura_20210930_2.png',
    brandIds: ['njpw'],
    name: 'Yuya Uemura',
    points: POINTS.MID_MID
  },
  {
    id: 'zack-sabre-jr',
    image: '//www.njpw1972.com/wp-content/uploads/2017/02/zack_20211026_1.png',
    brandIds: ['njpw'],
    name: 'Zack Sabre Jr.',
    points: POINTS.MID_MID
  }
]
