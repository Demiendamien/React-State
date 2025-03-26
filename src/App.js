import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Personne: {
        fullName: 'Damien Kanga',
        bio: 'Je suis un jeune développeur web et je me sens bien avec React',
        image: 'https://st3.depositphotos.com/3004689/15342/i/450/depositphotos_153426174-stock-photo-african-american-pretty-girl-raster.jpg',
        profession: 'Développeur web'
      },

      montre : false,
      intervalleTemps : 0,  
    };

    this.timer = null;   
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        intervalleTemps: prevState.intervalleTemps + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  toggleMontre = () => {
    this.setState((prevState) => ({
      montre: !prevState.montre,
    }));
  };

  render() {
    const { Personne, montre, intervalleTemps } = this.state;
    return (
      <div style={{textAlign : 'center', marginTop:'50px', backgroundColor : 'gray' }}>
        <button onClick={this.toggleMontre}>
          {montre ? "cacher le profil" : "Afficher le profil"}
        </button>
        {montre && (
          <div style={{marginTop : '20px'}}>
            <img src={Personne.image} alt='Profil' style={{borderRadius : '50%'}}/>
            <h1>{Personne.fullName}</h1>
            <p>{Personne.bio}</p>
            <h2>{Personne.profession}</h2>
          </div>
        )}
        <p>Temps écoulé depuis le montage : {intervalleTemps} secondes</p>
      </div>
    );
}
}

export default App;
