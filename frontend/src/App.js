import logo from './logo.svg';
import BarChart from './BarChart';
import './App.css';

function App() {
  return (
    <div className="App">
	<div>
		<header><h1>Temperature Analysis</h1></header>
	</div>
     <div class="col-md-2"> 
	    
		 </div>
    <br></br>
	<br></br>
      
      <div class="col-md-8 form">
		
	
			<form action="http://localhost:5000/upload" enctype="multipart/form-data" method="post">	
				
				<label class="up_styles">
					<input type="file" name="upload" multiple />
				</label>
				
			
				<input class="sub" type="submit" value="Send"/>
			</form>
			
		</div> 

		<div>
			<h2>Bar chart</h2>
			<BarChart/>
		</div>

      
    </div>
  );
}

export default App;
