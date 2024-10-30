import profilePic from './assets/ania.png.png'


function Card(){
    return(
      <div className="card">
        <img src= {profilePic} alt="profile pic" className='card-image' />
        <h2 className='card-title'>Powerlet</h2>
        <p className='card-text'>I teach maths and coding</p>
      </div>
    );
}

export default Card