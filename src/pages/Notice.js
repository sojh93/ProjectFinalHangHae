import React from "react";

// import Elements
import { Grid, Button, Text} from "../elements";

//import Components
import Header from "../components/Header";
import Bottom from "../components/Bottom";
import NoticeAlarm from "../components/NoticeAlarm";
import NoticeBanner from "../components/NoticeBanner";

const Notice = () => {
    const [index,setIndex] = React.useState(1);

    return(
        <>
    <Grid wrapNotice>
        <Header isNotice/>
        <Grid margin="5px 0 0 0" borderBottom='1px solid black' is_flex width='390px' height="40px">
                    <Grid height='35px' width='195px' textAlign='center' onClick={()=>setIndex(1)}><Text color="gray">알림</Text></Grid>
                    <Grid height='35px' width='195px' textAlign='center' onClick={()=>setIndex(2)}><Text color="gray">공지&#183;이벤트</Text></Grid>
        </Grid> 
        
                <Grid marginTop='-3px' borderRadius='1px' width="13%" height='1px' borderTop='3px solid black' transform={'translate(' + (- 1 + index)*100 + '%)'} transition='transform 0.1s ease 0.1s'/>
       <Grid is_flex>
            <Grid position="relative">
                <NoticeAlarm/>
                <NoticeAlarm/>
            </Grid>
            <Grid is_flex flexDirection="column">
                <NoticeBanner/>
                <NoticeBanner/>
            </Grid>
        </Grid>
        
        
    </Grid>
    <Bottom/>
    </>
    );
};

export default Notice;