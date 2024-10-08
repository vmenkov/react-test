import { Box, Button, Grid, Grommet, Heading, Paragraph, Text, Form, FormField, TextArea, TextInput } from 'grommet';
import { Expand } from 'grommet-icons';
import React, { useRef, useState, useEffect } from 'react';
//import { hot } from 'react-hot-loader/root';
import { useDispatch, useSelector } from 'react-redux';
import { useEvent, useMount, useSearchParam } from 'react-use';
import GetPageHtml from './components/GetPageHtml';

enum GridArea {
     ZONE_A='ZONE_A',
     ZONE_B='ZONE_B',
}


const App = () => {
  //const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const _n1 = useSearchParam("n1") ?? "1";
  const _n2 = useSearchParam("n2") ?? "1";
  
  //-- as strings
  const [an1, setAn1] = useState(_n1);
  const [an2, setAn2] = useState(_n2);

  //-- as numbers
  const [n1, setN1] = useState(+an1);
  const [n2, setN2] = useState(+an2);


  //-- the argument is the initial value
  const [count, setCount] = useState(0);

  return (
    <Grommet full plain>
      <Box fill direction="row">
      <Box width="50em">
        <Grid
          fill
          pad="small"
          rows={[`${n1}fr`, `${n2}fr`]}
          columns={['1fr']}
          areas={[
            {
              name: GridArea.ZONE_A,
              start: [0, 0],
              end: [0, 0],
            },
            {
              name: GridArea.ZONE_B,
              start: [0, 1],
              end: [0, 1],
            },
          ]}
        >
          
 <Box gridArea={GridArea.ZONE_A} align="start" justify="end"
  border={{ color: 'green', size: 'small' }}  >
<Text>Zone A (n1={n1})
</Text>
<GetPageHtml _n={an1}/>
</Box>

<Box gridArea={GridArea.ZONE_B} align="start" justify="end"
 border={{ color: 'yellow', size: 'small' }}  >
<Text>Zone B (n2={n2})
</Text>
<GetPageHtml _n={an2}/>
</Box>

</Grid> 


</Box>
    <Box border={{ color: 'pink', size: 'small' }}  >
     	    <Text>Zone C</Text>
	       <Box margin={{ top: 'small' }}>
	       <Text>What would you like the texts in Zone A and Zone B to look like?</Text>
            <Form
              onSubmit={() => {
	       setCount(count + 1);
	        setN1(+an1);
	        setN2(+an2);
                console.log("Submit, count="+count +", an1=" + an1 + "an2=" + an2 	);
		return false;
            }} >
              <TextInput
                placeholder="How many lines in Zone A"
                value={an1}	
                onChange={(event) => {
		console.log("Change N1: " + event.target.value +", an1=" + an1);
		setAn1( event.target.value);
		return true;                  }}
              />
              <TextInput
                placeholder="How many lines in Zone B"
                value={an2}
                onChange={(event) => {
		console.log("Change N2: " + event.target.value +", an2=" + an2);
		setAn2( event.target.value);
		return true;                  }}
              />
              <Button type="submit" label="Submit" primary />
            </Form>
          </Box>
  
    </Box>
  </Box>
</Grommet>
  );
};

//export default hot(App);
export default App;
