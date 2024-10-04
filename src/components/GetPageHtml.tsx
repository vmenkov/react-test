import React from 'react';
import { Box ,Text } from 'grommet';

function GetPageHtml({ _n}: {_n:number|string;})
{
  const n = +_n;
  let myHtml = "<h2>A text with " + n + " paragraphs</h2>\n";
  for(var j=1; j<= n; j++) {
    myHtml += "<p>Paragraph " + j +  " of " + n + "</p>" 	   
  }

  return (
          <>
          {myHtml !== undefined && (
            <Box background="brand" fill align="center" pad="medium" justify="start"
border={{ color: 'pink', size: 'small' }}
	    overflow="auto"
>
              {/* eslint-disable-next-line react/no-danger */}
              <div  dangerouslySetInnerHTML={{ __html: myHtml }}
	      style={{verticalAlign: "text-top"}}  />
	    </Box>
          )}
        </>
   );
}





export default GetPageHtml;
