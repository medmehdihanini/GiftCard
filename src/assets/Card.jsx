export default () => (
    <div className="birthdayCard">
        <div className="cardFront">
            <h3 className="happy">Alla ragazza bellissima</h3>
            <div className="balloons">
                <div className="balloonOne" />
                <div className="balloonTwo" />
                <div className="balloonThree" />
                <div className="balloonFour" />
            </div>
            <p style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                margin: '0',
                fontWeight: 'bold'
            }}>
                from Mehdi
            </p>        </div>
        <div className="cardInside">
            <h3 className="back">HAPPY BIRTHDAY Ilaria!</h3>
            <p>
                "Cara Ilaria,
            </p>
            <p>
                Anche se non ci conosciamo da tanto tempo, voglio dirti che sei una persona davvero speciale e gentile. Oggi è il tuo giorno speciale, e ti auguro tutto il meglio! Spero che tutti i tuoi sogni, inclusa la tua Supra, diventino realtà. Buon compleanno e che la tua giornata sia piena di felicità e sorprese meravigliose! 🎉🚗💖
            </p>
            {/* Ajouter l'image ici */}
            <img
                src="../../assest/toyota-supra-toyota-mk4-super-car-sportcars-ai-art.jpg"
                alt="Supra"
                style={{
                    width: '200px',
                    height: 'auto',
                    marginTop: '-40px',
                    marginLeft: '50px'
                }}             />
        </div>
    </div>
);
