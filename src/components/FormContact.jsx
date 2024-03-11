// FormContact.jsx

import React, { useState, useEffect } from 'react';

import '@styles/form.css';

// URL de l'API
const apiUrl = import.meta.env.VITE_API_ROOT_URL;

const FormContact = () => {

    const [formData, setFormData] = useState({
        email: '',
        message: '',
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    // Tableau de fruits
    const fruits = ['🍌', '🍓', '🍉', '🍍', '🥝', '🍏'];
    const nameFruits = ['banae', 'fraise', 'pastèque', 'ananas', 'kiwi', 'pomme'];
    const [indexFruits, setIndexFruits] = useState(1);

    const [randomFruits, setRandomFruits] = useState([]);

    const handleFruit = () => {
      indexFruits === 1 ? setIndexFruits(2) : setIndexFruits(1);
    };

    // Fonction de mélange (shuffle) basée sur l'algorithme de Fisher-Yates
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    useEffect(() => {        

        // Sélection aléatoire d'un fruit
        const selectedFruit = fruits[Math.floor(Math.random() * fruits.length)];

        // Création d'un tableau sans le fruit sélectionné
        const remainingFruits = fruits.filter(fruit => fruit !== selectedFruit);

        // Création d'un tableau de fruits aléatoires incluant deux fois le fruit sélectionné
        const fruitsArray = Array.from({ length: 6 }, (_, index) =>
            index < 2 ? selectedFruit : remainingFruits[Math.floor(Math.random() * remainingFruits.length)]
        );

        // Mélanger le tableau fruitsArray
        const shuffledFruitsArray = shuffleArray(fruitsArray);

        setFormData({
        ...formData,
        selectedFruit,
        });

        setRandomFruits(shuffledFruitsArray);
    }, []);

    const handleChange = (e) => {

      const { name, value } = e.target;

      // incrémentation si fruit
      if (name.startsWith('fruit')){   
        
        setFormData({
          ...formData,
          [`fruit${indexFruits}`]: value,
          [`index${indexFruits}`]: name,
        });
        handleFruit();

      } else {
        
        setFormData({
          ...formData,
          [name]: value,
        }); 
      }      
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            formData.selectedFruit &&
            formData.selectedFruit === formData.fruit1 &&
            formData.selectedFruit === formData.fruit2            
        ) {

          try {
            
            // Traitement du formulaire
              const response = await fetch(`${apiUrl}/envoyer-email`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: formData.email, message: formData.message }),
              });

              if (response.ok) {

                setError(null);   
                setSuccess('Votre message a bien été envoyé.');

                // Réinitialiser le formulaire
                setFormData({
                  email: '',
                  message: '',
                  fruit1: '',
                  fruit2: '',
                  selectedFruit: '',
                });
              } else {
                setError('Erreur lors de la soumission du formulaire');              
              }             
          
        } catch (error) {
          setError('Erreur lors de la soumission du formulaire.');

        }  
      } else {
        // Afficher un message d'erreur
        setError('Veuillez sélectionner les deux bons fruits.');
    }      
    };    

  return (
    <form onSubmit={handleSubmit}>
      <div className="form_group">
        <label className="form_label" htmlFor="email">Email</label>
        <input
        className="form_input"
          type="email"
          id="email"
          name="email"
          placeholder="john@doe.fr"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form_group">
        <label className="form_label" htmlFor="message">Message</label>
        <textarea
            className="form_input"
          id="message"
          name="message"
          placeholder="De quoi voulez-vous me parler ?"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className="fruit_list">
        <p>Cliquez sur les 2 <span className='fruit_highlight'>{formData.selectedFruit}</span> : </p>   
        <p className='fruit_fruit'>     
        {randomFruits.map((fruit, index) => (
          <React.Fragment key={`fragment${index}`}>
            <input                         
              type="radio"
              id={`id${index}`}
              name={`fruit${index}`}
              value={fruit}
              checked={formData['index1'] === `fruit${index}` || formData['index2'] === `fruit${index}`}
              onChange={handleChange}
            />
            <label htmlFor={`id${index}`}>
              {fruit}
            </label>
            </React.Fragment>
        ))}    
        </p>    
      </div>  
      <div className='form_error'>{error}</div> 
      <div className='form_success'>{success}</div>   
      <button className="form_button" type="submit">Envoyer</button>
    </form>
  );
};

export default FormContact;
