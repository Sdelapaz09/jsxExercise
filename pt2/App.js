function App(){
  return (
    <div>
      <Tweet 
        name="Shenelle"
        username="Shenellee"
        date={new Date().toDateString()}
        message="New App!"
      />
      <Tweet
        name="Shenelle"
        username="Shenellee"
        date={new Date().toDateString()}
        message="Tweet 2!"
       />
       <Tweet
         name="Shenelle"
         username="Shenellee"
         date={new Date().toDateString()}
         message="Tweet 3!"
       />
    </div>
  );
}
