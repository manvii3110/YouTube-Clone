import React from 'react';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import './SearchPage.css';

function SearchPage() {
    return (
        <div className="searchPage">
        <div className="searchPage__filter">
        <TuneOutlinedIcon/>
        <h2>FILTER</h2> 
        </div>
        <hr/>
        <ChannelRow
        image="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj"
        channel="Clever Programmer"
        verified
        subs="660K"
        noOfVideos={382}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the..." 
        />
        <hr/>
        <VideoRow 
        views="1.4M"
        subs="2.37M"
        description="Do you want a FREE one hour training... check"
        timestamp="2 years ago"
        channel="Clever Programmer" 
        title="Let's build a YouTube Clone with REACT JS for Beginners"
        image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ"
        
        />
       <VideoRow
            views="2M"
            subs="2.37M"
            description="Learn the basics of HTML5 and web development in this awesome course for beginners. ⭐️ Contents ⭐️ ⌨️ (0:00:00) ..."
            timestamp="1 years ago"
            channel="Clever Programmer"
            title="HTML Full Course - Build a Website Tutorial"
            image="https://i.ytimg.com/vi/pQN-pnXPaVg/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDSHd4tgm81VMHWtFRnQJDAe-K3Bg"
            />
        <VideoRow 
        views="4.5M"
        subs="2.37M"
        description="In this FREE LIVE training, Qazi & Sonny will show you how to build a Tik Tok Clone with REACT JS "
        timestamp="30 Jul 2020"
        channel="Clever Programmer" 
        title="Let's Build a Tik Tok Clone with REACT JS for Beginners"
        image="https://i.ytimg.com/vi/GePLvNgWROg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBEg1y5G2nbEqMsPLVAalAysYtBfA"
        
        />
        <VideoRow
            views="3.1M"
            subs="1.23M"
            description="Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. 🔥Get my Complete JavaScript Course with a..."
            timestamp="2 years ago"
            channel="Clever Programmer"
            title="JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour [2020]"
            image="https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCE3fbsB0deZPlgm79U9HlO8DG-0A"
            />

            <VideoRow
            views="2.4M"
            subs="1.23M"
            description="React Tutorial - Learn to build fast web apps with React (React js) from scratch. 🔥Get the complete React course: ..."
            timestamp="2 years ago"
            channel="Clever Programmer"
            title="React Tutorial for Beginners [React js]"
            image="https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBIQ5WzXVRH8bb9tiV5khu2jAe4HA"
            />
       <VideoRow
            views="2M"
            subs="2.37M"
            description="Learn the basics of HTML5 and web development in this awesome course for beginners. ⭐️ Contents ⭐️ ⌨️ (0:00:00) ..."
            timestamp="1 years ago"
            channel="Clever Programmer"
            title="HTML Full Course - Build a Website Tutorial"
            image="https://i.ytimg.com/vi/pQN-pnXPaVg/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDSHd4tgm81VMHWtFRnQJDAe-K3Bg"
            />

            <VideoRow
            views="3.1M"
            subs="1.23M"
            description="Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. 🔥Get my Complete JavaScript Course with a..."
            timestamp="2 years ago"
            channel="Clever Programmer"
            title="JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour [2020]"
            image="https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCE3fbsB0deZPlgm79U9HlO8DG-0A"
            />

            <VideoRow
            views="2.4M"
            subs="1.23M"
            description="React Tutorial - Learn to build fast web apps with React (React js) from scratch. 🔥Get the complete React course: ..."
            timestamp="2 years ago"
            channel="Clever Programmer"
            title="React Tutorial for Beginners [React js]"
            image="https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBIQ5WzXVRH8bb9tiV5khu2jAe4HA"
            />

        </div>
    )
}

export default SearchPage;
