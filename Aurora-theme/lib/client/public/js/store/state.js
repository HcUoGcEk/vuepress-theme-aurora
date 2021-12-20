export default {
    heroImage: "/img/head.jpg",
    animeImg: 'https://picture.cco.vin/pic/rmimg',
    tagArr: '',
    categories: [],
    allPageMap: '',
    setTatStatus: false,
    fontColorStyle: '--fontColor: #2c3e50;',
    fontFamilyStyle: '--fontFamily: -apple-system;',
    pageNum: 100,
    //isFitter: themeProperty.isFitter,
    isFitter: false,
    varFilterBlur: 5,
    varBorderRadius: 20,
    varOpacity: 1,
    filterBlurStyle: '--fitter-blue: 5px;',
    borderRadiusStyle: '--borderRadius: 20px;',
    opacityStyle: '--opacity: 0.5;',
    welcomeOpenTime: 0,
    welcomeOpenStatus: false,
    version: '1.0.4',
    showPosterShadow: false,
    showPostImg: false,
    postImgHref: '',
    downloadImgTitle: 'ccds',
    showShadeLoad: false,
    posterShareSite: '',
    qrImgHref: '',
    picture: '',
    photos: [],
    loadingFinish: false,
    verifyStatus: false,
    editMoods: [],
    currentPageNum: 1,
    openMobileSidebar: false,
    posterData: -2,
    //首页壁纸
    homeWps: '',
    currentCatalogObjectArr: [],

    //顶部默认图片地址
    defaultPageImg: 'https://picoss.cco.vin/animate/wall/555260.png',
    defaultFriendImg: 'https://picoss.cco.vin/animate/wall/669.png',
    defaultTagImg: 'https://picoss.cco.vin/animate/wall/763311.png',
    defaultMoodImg: 'https://picoss.cco.vin/animate/wall/5849.png',

    //默认随机颜色
    defaultRandomColors: ['#ffcad4','#d8e2dc','#8d99ae','#b8f2e6','#84c7d0',
        '#aed9e0','#00b4d8','#caf0f8','#fbc4ab','#fdc5f5',
        '#84dcc6','#a9def9','#fcf6bd','#f0a6ca','#b9faf8',
        '#42a5f5','#ff9800','#b39ddb','#6d45bb','#b388ff',
        '#1565c0','#26c6da','#5e548e','#90f1ef','#5b5f97',
        '#bbe6e4','#42bfdd','#72ddf7','#8093f1','#9ed8d8',
        '#7ea8be','#ef90b3','#b892ef','#c0b9dd','#c0d9dd',
        '#75c9c8','#ded9e2','#b5e2fa','#62b6cb','#5fa8d3',
        '#0fa3b1','#b5e2fa','#5fa8d3','#62b6cb','#b892ff'],
    defaultFontColor: [
        "#2c3e50", "#42a5f5", "#8093f1", "#FF6EC7", "#FF7F00", "#8FBC8F", "#EAADEA",
        "#3299CC", "#CDCDCD", "#CC3299", "#FF7F00", "#2F4F4F",
    ],
    defaultFont: [
        "-apple-system", "hlt", "tzt", "sst", "lf", "xsf", "lsf", "cgt",
    ],
    defaultHomePageImgApi: 'https://api.ixiaowai.cn/api/api.php',
    defaultPostImgApi: 'https://unsplash.it/1600/900?random',

    //版权信息
    latestVersion: 'V1.10.x',
    printRightIndex: 0,
    mobileOpenStatus: false,
    currentTagNum: 1
}

//module.exports = {
//    heroImage: "/img/head.jpg",
//    animeImg: 'https://picture.cco.vin/pic/rmimg',
//    tagArr: '',
//    categories: [],
//    allPageMap: '',
//    setTatStatus: false,
//    fontColorStyle: '--fontColor: #2c3e50;',
//    fontFamilyStyle: '--fontFamily: -apple-system;',
//    pageNum: 100,
//    //isFitter: themeProperty.isFitter,
//    isFitter: false,
//    varFilterBlur: 5,
//    varBorderRadius: 20,
//    varOpacity: 1,
//    filterBlurStyle: '--fitter-blue: 5px;',
//    borderRadiusStyle: '--borderRadius: 20px;',
//    opacityStyle: '--opacity: 0.5;',
//    welcomeOpenTime: 0,
//    welcomeOpenStatus: false,
//    version: '1.0.4',
//    showPosterShadow: false,
//    showPostImg: false,
//    postImgHref: '',
//    downloadImgTitle: 'ccds',
//    showShadeLoad: false,
//    posterShareSite: '',
//    qrImgHref: '',
//    picture: '',
//    photos: [],
//    loadingFinish: false,
//    verifyStatus: false,
//    editMoods: [],
//    currentPageNum: 1,
//    openMobileSidebar: false,
//    posterData: -2,
//    //首页壁纸
//    homeWps: '',
//    currentCatalogObjectArr: [],
//
//    //顶部默认图片地址
//    defaultPageImg: 'https://picoss.cco.vin/animate/wall/555260.png',
//    defaultFriendImg: 'https://picoss.cco.vin/animate/wall/669.png',
//    defaultTagImg: 'https://picoss.cco.vin/animate/wall/763311.png',
//    defaultMoodImg: 'https://picoss.cco.vin/animate/wall/5849.png',
//
//    //默认随机颜色
//    defaultRandomColors: ['#ffcad4','#d8e2dc','#8d99ae','#b8f2e6','#84c7d0',
//        '#aed9e0','#00b4d8','#caf0f8','#fbc4ab','#fdc5f5',
//        '#84dcc6','#a9def9','#fcf6bd','#f0a6ca','#b9faf8',
//        '#42a5f5','#ff9800','#b39ddb','#6d45bb','#b388ff',
//        '#1565c0','#26c6da','#5e548e','#90f1ef','#5b5f97',
//        '#bbe6e4','#42bfdd','#72ddf7','#8093f1','#9ed8d8',
//        '#7ea8be','#ef90b3','#b892ef','#c0b9dd','#c0d9dd',
//        '#75c9c8','#ded9e2','#b5e2fa','#62b6cb','#5fa8d3',
//        '#0fa3b1','#b5e2fa','#5fa8d3','#62b6cb','#b892ff'],
//    defaultFontColor: [
//        "#2c3e50", "#42a5f5", "#8093f1", "#FF6EC7", "#FF7F00", "#8FBC8F", "#EAADEA",
//        "#3299CC", "#CDCDCD", "#CC3299", "#FF7F00", "#2F4F4F",
//    ],
//    defaultFont: [
//        "-apple-system", "hlt", "tzt", "sst", "lf", "xsf", "lsf", "cgt",
//    ],
//    defaultHomePageImgApi: 'https://api.ixiaowai.cn/api/api.php',
//    defaultPostImgApi: 'https://unsplash.it/1600/900?random',
//
//    //版权信息
//    latestVersion: 'V1.10.x',
//    printRightIndex: 0,
//    mobileOpenStatus: false,
//    currentTagNum: 1
//}