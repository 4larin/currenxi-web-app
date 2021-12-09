import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';
  
// Sample chart data
const pdata = [
    {
        name: 'Monday',
        
    },
    {
        name: 'Tuesday',
        
    },
    {
        name: 'Wednesday',
        
    },
    {
        name: 'Thursday',
       
    },
    {
        name: 'Friday',
        
    },
    {
        name: 'Saturday',
        
    },
];
  
function Graph() {
    return (
        <>
            
            <ResponsiveContainer width="100%" height="40%" aspect={3}>
                <LineChart data={pdata} margin={{ right: 200 }}>
                    <CartesianGrid />
                    <XAxis dataKey="name" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}
  
export default Graph;