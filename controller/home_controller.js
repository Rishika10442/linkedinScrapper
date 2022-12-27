const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");

//const url = "https://www.linkedin.com/jobs/view/home-health-home-care-aide-at-volunteers-of-america-3414930657?refId=NtBpvCK2k%2B6mAMdGP6JFRg%3D%3D&trackingId=FG8I1fKMAveibwtxSgs4CQ%3D%3D&position=1&pageNum=0&trk=public_jobs_jserp-result_search-card";
//const url ="https://www.linkedin.com/jobs/view/social-media-content-manager-at-state-of-oklahoma-3411153339?refId=xI3UAlt3GrdxtLeAhXou9g%3D%3D&trackingId=SV%2BccgpnsoRTwpZyiVeoYw%3D%3D&position=3&pageNum=0&trk=public_jobs_jserp-result_search-card";
module.exports.home = async function(req,res){
    try {
        console.log("hiya");
        console.log(req.body);
        const url = req.body.url;
        // Fetch HTML of the page we want to scrape
        const { data } = await axios.get(url);
        // Load HTML we fetched in the previous line
         const $ = cheerio.load(data);
        // Select all the list items in plainlist class
        const listItems = $(".show-more-less-html__markup");
        
           // console.log(listItems);
           
          let len = ($(listItems).children());
         

          
          console.log("*******************");
         // console.log(listItems.tag('strong'));
          console.log("Successfully written data to file");
        
        return res.send(listItems.html());
      } catch (err) {
        console.error(err);
      }
}

module.exports.formed = function(req,res){
    res.render('home')
}