angular.module('starter.services', [])

.factory('AllAppService', function() {
  // Might use a resource here that returns a JSON array

  var allNews = [
    { 
      id: 0, logo:'img/news/5000 year.jpg', 
      title: '5000 years budish', 
      url: 'http://www.5000-years.org/', 
      // description: 'ជំនួយស្មារតី, ប្រវត្តិនានា, រូបភាព, ស្ដាប់ព្រះធម៌, សៀវភៅព្រះធម៌',
      isFav: false
    },
	{ 
      id: 1, logo:'img/news/moneaksekar.gif', 
      title: 'មនសិការខ្មែរ', 
      url: 'http://moneaksekar.com/',
      // description: 'ព័ត៌មានជាតិ, ព័ត៌មានស៊ើបអង្កេត, សន្តិសុខ សង្គម, សិល្បៈកំសាន្ត, នយោបាយ, ព័ត៌មានអន្តរជាតិ',
      isFav: false
    },
    { 
      id: 2, logo:'img/news/radio australia.png', 
      title: 'វិទ្យុអូស្ត្រាលី', 
      url: 'http://www.radioaustralia.net.au/khmer/', 
      // description: 'ព័ត៌មានថ្មីៗ, សិក្សាភាសាអង់គ្លេស, វិទ្យុ, សហគមន៍នានា',
      isFav: false
    },
    { 
      id: 3, logo:'img/news/rfa.jpg', title: 'RFA', 
      url: 'http://www.rfa.org/khmer/', 
      // description: 'បទវិភាគ, នយោបាយ, សិទ្ធិមនុស្ស, សេដ្ឋកិច្ច-សង្គម, ដីធ្លី, បរិស្ថាន, សុខភាព, ប្រវត្តិសាស្ត្រ, ច្បាប់, ខ្មែរក្រហម, រូបភាព, វីដេអូ, វេទិការអ្នកស្ដាប់, នាទីប្រចាំសប្ដាហ៍',
      isFav: false
    },
    { 
      id: 4, logo:'img/news/rfi.png', title: 'RFI', 
      url: 'http://www.khmer.rfi.fr/', 
      // description: 'កម្ពុជា, អាស៊ី, អឺរ៉ុប, អាមេរិក, ដើមបូព៌ា, អាហ្វ្រិក, តន្ត្រីRFI, រៀនភាសាបារាំង, បណ្ណសារ, នយោបាយ, បណ្ណសារ, នយោបាយ, សង្គម-វប្បធម៌, សេដ្ឋកិច្ច, ច្បាប់, កិច្ចការបរទេស, បទសម្ភាសន៍, បទវិភាគ',
      isFav: false
    },
    { 
      id: 5, logo:'img/news/voa.jpg', title: 'Voice Of America', 
      url: 'http://khmer.voanews.com/', 
      // description: 'កម្ពុជា, អាស៊ីអាគ្នេយ៍, អន្តរជាតិ, អាមេរិក, សង្គម, វប្បធម៌, វិទ្យុ, ទូរទស្សន៍, រៀនភាសាអង់គ្លេស',
      isFav: false 
    },
    { 
      id: 6, logo:'img/news/vod.jpg' , title: 'Voice Of Democracy', 
      url: 'http://vodhotnews.com/', 
      // description: 'សង្គម, សេដ្ឋកិច្ច, សុខភាព, បរិស្ថាន, ខ្មែរក្រហម, វប្បធម៌, ព័ត៌មានអន្តរជាតិ, កំសាន្ត, កីឡា, បច្ចេកវិទ្យា, ទំព័រពិសេស, កម្មវិធីវិទ្យុ',
      isFav: false
    },
    { 
      id: 7, logo:'img/news/cambodiadailykhmer.png', title: 'Cambodiadaily Khmer', 
      url: 'http://www.cambodiadailykhmer.com/', 
      // description: 'ព័ត៌មាន, សេដ្ឋកិច្ច, អត្ថបទពណ៌នាសំខាន់ៗ, ទស្សន, សាវតារ',
      isFav: false
    },
    { 
      id: 8, logo:'img/news/camnews org.jpg', title: 'CAMNEWS ORGANIZATION', 
      url: 'http://www.camnews.org/', 
      // description: 'កីឡា, ជីវិត, ជំនួញបច្ចេកវិទ្យា, ប្រជាប្រិយ, ព័ត៌មានខ្មែរ, សារដ៏ក្ដៅ, សុខភាព, សេដ្ឋកិច្ចនយោបាយ',
      isFav: false
    },
    {
      id: 9, logo:'img/news/dtn7.png', title: 'ដើមត្នោ7', 
      url: 'http://www.dtn7.com/', 
      // description: 'ព័ត៌មានជាតិ, ព័ត៌មានអន្ដរជាតិ, ទស្សនៈនយោបាយ, តុលាការ, សិល្បៈកំសាន្ត, ស្រាវជ្រាវ, សេដ្ឋកិច្ច, អារ្យធម៌, កីឡា, សុខភាព',
      isFav: false
    },
    { 
      id: 10, logo:'img/news/phost khmer.jpg', title: 'ភ្នំពេញប៉ុស្ត៍', 
      url: 'http://www.postkhmer.com/', 
      // description: 'ព័ត៌មានជាតិ, ព័ត៌មានអន្តរជាតិ, សេដ្ខកិច្ច, ជិវិតកម្សាន្ត, កីឡា, Lift, multimedia, ប៉ុស្ដិ៍អចលនទ្រព្យ, សេវាកម្ម',
      isFav: false
    },
    { 
      id: 11, logo:'img/news/prey nokor.png', title: 'ព្រៃនគរ', 
      url: 'http://preynokornews.info/', 
      // description: 'កម្ពុជាក្រោម, កម្ពុជា, វៀតណាម, អន្តរជាតិ, ទស្សនៈ, ពហុព័ត៌មាន, វិថីជីវិត, កំណាព្យ',
      isFav: false
    },

    ///===============news under gavernment=======================
    {
      id: 12, logo:'img/news/arey.png', title: 'អរិយធម៌', 
      url: 'http://www.arey-news.com/', 
      // description: 'ព័ត៌មានជាតិ, ព័ត៌មានអន្តរជាតិ, ទស្សនៈ, សេដ្ឋកិច្ច, សិល្បៈ កីឡា, ទេសចរណ៍, សុខភាព, ប្រវត្តិសាស្ត្រ',
      isFav: false
    },
    { id: 13, logo:'img/news/cambodia page.jpg', title: 'CAMBODIA PAGE', 
      url: 'http://www.cambodiapage.info/', 
      // description: 'សន្តិសុខសង្គម, នយោបាយ, សេដ្ឋកិច្ច, សិល្បៈ និងតារា, កីឡា, បច្ចេកវិទ្យា, សុខភាព',
      isFav: false
    },
    { 
      id: 14, logo:'img/news/cam news.jpg', title: 'CAM NEWS', 
      url: 'http://camnews.com.kh/', 
      // description: 'ព័ត៌មានជាតិ, ព័ត៌មានអន្តរជាតិ, បច្ចេកវិទ្យា, កំសាន្ត, ជិវិតរស់នៅ, មិនគួរឲ្យជឿរ, កីឡា, យានយន្ត, ទេសចរណ័, រូបភាប, ព័ត៌មានវីដេអូ',
      isFav: false 
    },
    { 
      id: 15, logo:'img/news/cen.jpg', title: 'CEN  CAMBODIA EXPRESS NEWS',
      url: 'http://www.cen.com.kh/', 
      // description: 'ដំណឹងក្នុងប្រទេស, ពិភពលោក, កំសាន្ត, កីឡា, សម្ភារៈទំនើប, ហោរា/ហុងស៊ុយ, ចំណេះដឹងទូទៅ, សុខភាព, កាលវិភាគជើងយន្ដហោះ, ផ្សេងៗ',
      isFav: false 
    },
    { 
      id: 16, logo:'img/news/dap.jpg', 
      title: 'DAM ORM PEL', 
      url: 'http://www.dap-news.com/', 
      // description: 'ព័ត៌មានក្នុងប្រទេស, ព័ត៌មានអន្តរជាតិ, សេដ្ឋកិច្ច, សិល្បៈ, សុខភាព, ការងារ, តារាងហោះហើរ, Traffic camera',
      isFav: false
    },
    { 
      id: 17, logo:'img/news/kampuchea thmey.jpg', title: 'KAMPUCHEA THMEY', 
      url: 'http://kpt-news.com/', 
      // description: 'ព័ត៌មានជាតិ, ព័ត៌មានអន្តរជាតិ, សិល្បៈកំសាន្ត, កីឡា, នយោបាយ, យុវជន និងការតស៊ូ, ជីវិតជោគជ័យ អត្ថាធិប្បាយ, ទស្សនៈ',
      isFav: false
    },
    { 
      id: 18, logo:'img/news/kkn.jpg', title: 'KNN NEWS', 
      url: 'http://www.kkn-news.com/', 
      // description: 'ព័ត៌មានជាតិ, ព័ត៌មានអន្តរជាតិ, សេដ្ឋកិច្ច, សិល្បៈ វប្បធម៌, ទេសចរណ៍, កីឡា, សុខភាព',
      isFav: false
    },
	{ 
      id: 19, logo:'img/news/kntnews.png', title: 'កំណើរថ្មី', 
      url: 'http://www.kntnews.com/', 
      // description: 'សូមរាយការណ៍, ព័ត៌មានជាតិ, អន្តរជាតិ, វិភាគកីឡា, ទេសចរណ៍, បច្ចេកវិទ្យា, សិល្បៈកំសាន្ត, សុខភាព និងសម្រស់',
      isFav: false
    },
    { 
      id: 20, logo:'img/news/kohsantepheap daily.jpg', title: 'KOHSANTEPHEAP DAILY', 
      url: 'http://kohsantepheapdaily.com.kh/', 
      // description: 'ព័ត៌មានជាតិ, ព័ត៌មានអន្តរជាតិ, សិល្បៈនិងវប្បធម៌, កីឡា, ស្រាវជ្រាវ, សេវាកម្ម',
      isFav: false
    },
	{ 
      id: 21, logo:'img/news/meatophoum.gif', title: 'Meatophoum', 
      url: 'http://www.meatophoum.com/', 
      // description: 'ព័ត៌មានជាតិ, អន្តរជាតិ, សន្តិសុខសង្គម, សេដ្ឋកិច្ច, កីឡា, ជីវិតកំសាន្ត, ផ្សេងៗ',
      isFav: false
    },
    { 
      id: 22, logo:'img/news/nokorwat.jpg', title: 'NOKORWAT', 
      url: 'http://nokorwatnews.com/', 
      // description: 'សារព័ត៌មាន(កំសាន្ត(សំណើច,ប្លែកៗ, កំណាព្យ, បទចំរៀង),ប្រវត្តិសាស្ត្រ(ជំនឿរសាសនា, ប្រវត្តិសាស្ត្រខ្មែរ និងពិភពលោក), ហោរាសាស្ត្រ ព័ត៌មានជាតិ, ព័ត៌មានអន្តរជាតិ,ទស្សនៈ, ឯកសារស្រាវជ្រាវ កំសាន្ត, ហោរាសាស្ត្រ, ទស្សនាវដ្ដី, អចលទ្រព្យ, កាលប្រវត្តិ',
      isFav: false
    },
    { 
      id: 23, logo:'img/news/phnom phenh daily.jpg', title: 'PHNOM PENH DAILY', 
      url: 'http://www.phnompenhdailynews.com/', 
      // description: 'ព័ត៌មានទូទៅ, ព័ត៌មានក្ដៅ, ពិភពលោក, សិល្បៈកំសាន្ត, កីឡា, សុខភាព, ជីវិត, បច្ចេកវិទ្យាថ្មី, ទេសចរ, ពិភពប្លែកៗ, បេតិកភណ្ឌខ្មែរ, ហោរាសាស្ដ្រ',
      isFav: false
    },
    { id: 24, logo:'img/news/ppd.png', title: 'PPD', 
      url: 'http://ppd-news.com/', 
      // description: 'ព័ត៌មានជាតិ, ព័ត៌មានអន្ដរជាតិ, សិល្បៈនិងវប្បធម័, ចំណេះដឹងទូទៅ, អចលនទ្រព្យ, ព័ត៌មានប្លែកៗ, កំសាន្ត',
      isFav: false
    },
    { id: 25, logo:'img/news/pressocm.jpg', title: 'PRESSOCM', 
      url: 'http://pressocm.gov.kh/', 
      // description: 'រាជរដ្ឋាភិបាល, ព្រឹត្តិការណ៍បច្ចុប្បន្ន, ទស្សនៈ, បណ្ដុំឯកសារ, វិចិត្រសាល',
      isFav: false
    },
    { 
      id: 26, logo:'img/news/sakal.jpg', title: 'SAKAL', 
      url: 'http://www.sakal-news.com/', 
      // description: 'ព័ត៌មានជាតិ (នយោបាយ, សេដ្ឋកិច្ច), អន្តរជាតិ, សិល្បៈ, កំសាន្ត, ច្បាប់, កីឡា, ទេសចរណ៍, សុខភាពនិងសម្រស់, បច្ចេកវិទ្យា',
      isFav: false
    },
    { 
      id: 27, logo:'img/news/vorakchun.jpg', title: 'VORAKCHUN', 
      url: 'http://www.vorakchun.com/', 
      // description: 'ទាន់ហេតុការណ៍, ព័ត៌មានជាតិ, ព័ត៌មានអន្តរជាតិ, សិល្បៈកំសាន្ត, កីឡា, សន្តិសុខសង្គម, ផ្សេងៗ',
      isFav: false
    },
    { 
      id: 28, logo:'img/news/watphnom.jpg', title: 'Watphnom', 
      url: 'http://www.watphnom-news.com/', 
      // description: 'ព័ត៌មានជាតិ, ព័ត៌មានអន្តរជាតិ,សុខភាពសម្រស់, សិល្បៈកម្សាន្ត',
      isFav: false
    },
    { 
      id:29, logo:'img/news/yobminh.jpg', title: 'YOB MINH', 
      url: 'http://www.yobminh.com/', 
      // description: 'ព័ត៌មានជាតិ, ព័ត៌មានអន្តរជាតិ,សុខភាព, បច្ចេកវិទ្យា, សិល្បៈនិងវប្បធម៌, កីឡា, ទេសចរណ៍, កំសាន្ត, សោភ័ណភាព ជីវិត',
      isFav: false
    },

    // television ==========================
    { 
      id: 30, logo:'img/tv/bayon.jpg', title: 'Bayon TV', 
      url: 'http://www.bayontv.com.kh/', 
      // description: 'ព័ត៌មានជាតិ, អត្ថាធិប្បាយ, ព័ត៌មានអន្តរជាតិ, កីឡា, សេដ្ឋកិច្ច, តំបន់ផ្សាយបន្ត, កម្មវិធីកំសាន្ត, វីដេអូ ព័ត៌មានប្រចាំថ្ងៃ',
      isFav: false
    },
    { 
      id: 31, logo:'img/tv/ttk.jpg', title: 'TTK', 
      url: 'http://www.tvk.gov.kh/', 
      // description: 'ព័ត៌មានជាតិ,អន្តរជាតិ, ព័ត៌មានពេលព្រឹក, ទទកថ្ងៃនេះ, ទទកជ្រុងមួយ, អរុណសួស្ដី, កម្មវិធីកំសាន្ត, ប្រវត្តិទទក, ព្រះមហាក្សត្រ, ព្រឹទ្ធសភា/រដ្ឋសភា, រាជរដ្ឋាភិបាល',
      isFav: false
    },
    { 
      id: 32, logo:'img/tv/ann.jpg', title: 'Absara TV', 
      url: 'http://www.ann.com.kh/', 
      // description: 'ព័ត៌មានក្នុងប្រទេស, ព័ត៌មានក្រៅប្រទេស, យុវវ័យ, វប្បធម៌, ទេសចរណ៍, ទូរទស្សន៍អប្សរា, វីដេអូឯកសារ',
      isFav: false
    },
  ];

  var allPhones = [
    { 
      id: 0, logo:'img/images1.jpg', title: 'Nika phone shopt',
      url: '', 
      // description: '',
      isFav: false
    }    
  ];
  
  var allJobs = [
    { 
      id: 0, logo:'img/job/bongthom.gif', title: 'BONG THOM', 
      url: 'http://bongthom.com/', 
      // description: 'Jobs, classifieds and other services for Cambodia.',
      isFav: false 
    },
    { 
      id: 1, logo:'img/job/camhr.png', title: 'CAMHR', 
      url: 'http://camhr.com/', 
      // description: 'Cabodia Human Resource. The best jobsite in Cambodia.',
      isFav: false
    },
    { 
      id: 2, logo:'img/job/pelprek.png', title: 'PELPREK', 
      url: 'http://www.pelprek.com/', 
      // description: 'Your bussiness gateway.',
      isFav: false
    },
    { 
      id: 3, logo:'img/job/12findjob.png', title: '12FINDJOB', 
      url: 'http://12findjob.info/', 
      // description: '',
      isFav: false
    },
    { 
      id: 4, logo:'img/job/cambowork.gif', title: 'CAMBOWORK', 
      url: 'http://www.cambowork.com/', 
      // description: 'Cambodia work',
      isFav: false
    },
    { 
      id: 5, logo:'img/job/adlandpro.gif', title: 'ADLANDPRO', 
      url: 'http://www.adlandpro.com/', 
      // description: '',
      isFav: false
    },  
    { 
      id: 6, logo:'img/job/cambodia jobs.png', title: 'CAMBODIA JOBS', 
      url: 'http://www.cambodia-jobs.com/', 
      // description: '',
      isFav: false
    },
    { 
      id: 7, logo:'img/job/cambodiajobs.jpg', title: 'CAMBODIA JOBS', 
      url: 'http://www.cambodiajobs.biz/', 
      // description: '',
      isFav: false
    },
    { 
      id: 8, logo:'img/job/khmer2world.png', title: 'KHMER TO WORLD', 
      url: 'http://khmer2world.com/', 
      // description: '',
      isFav: false
    },
    { 
      id: 9, logo:'img/job/servingweb.png', title: 'SERVING WEB', 
      url: 'http://www.servingweb.com/', 
      // description: '',
      isFav: false
    },
    { 
      id: 10, logo:'img/job/cra.png', 
      title: 'CAMBODIA RECRUITMENT AGENCY', 
      url: 'http://www.cra.com.kh/', 
      // description: 'Cambodia Recruitment agency.',
      isFav: false
    },
    { 
      id: 11, logo:'img/job/tverka.png', title: 'TVERKA', 
      url: 'http://www.tverka.com/', 
      // description: 'Need the employee! start ost free job.',
      isFav: false
    },
    { 
      id: 12, logo:'img/job/hrcambodia.png', title: 'HRCAMBODIA', 
      url: 'http://www.hrcambodia.com/', 
      // description: 'the best website to find job in Cambodia.',
      isFav: false
    },
    { 
      id: 13, logo:'img/job/hrinc.png', title: 'HRINC', 
      url: 'http://www.hrinc.com.kh/', 
      // description: 'Great jobs, great people. The Best Employment, Career and Recruitment Site,  Working in Cambodia.',
      isFav: false
    }
  ];

  return {
    allNews: function() {
      return allNews;
    },
    allJobs: function() {
      return allJobs;
    },
    allPhones: function() {
      return allPhones;
    }
    /*get: function(appId) {
      // Simple index lookup
      return allNews[appId];
    }*/
  }
});