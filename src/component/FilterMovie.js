
import {Rating} from '@mui/material'

const FilterMovie = ({ setSearch , setRate}) => {
 
  
    
  
  return (
    <div>
      <form>
        <label>
          <input
            type="text"
            placeholder="search movie..."
            
            onChange={(e) => setSearch(e.target.value)}

          />
<Rating name="half-rating" defaultValue={0} precision={0.5} onChange={(e)=>setRate(e.target.value)} />

      </label>
      </form>
    </div>
  );
};

export default FilterMovie;
