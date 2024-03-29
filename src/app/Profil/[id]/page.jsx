'use client'

import styles from "./page.module.scss";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@/components/Atoms/Container/Container';
import Wrapper from '@/components/Atoms/Wrapper/Wrapper';
import WrapperRow from "@/components/Atoms/Wrapper/WrapperRow";
import H2 from '@/components/Atoms/Title/H2/H2';
import InputButton from '@/components/Atoms/Input/InputButton';
import InputText from "@/components/Atoms/Input/InputText";
import SecondaryBtn from "@/components/Atoms/Button/SecondaryBtn";
import Cookies from 'js-cookie';

export default function Profil({ params: {id} }) {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
      const chargerProfil = async () => {
          try {
              const reponse = await axios.get(`http://localhost:3000/user/${id}`);
              setUser(reponse.data);
          } catch (erreur) {
              console.error("Erreur lors de la récupération de l'utilisateur:", erreur);
          }
      };

      chargerProfil();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/user/${id}`, user);
      alert('Profil mis à jour avec succès!');
    } catch (erreur) {
      console.error("Erreur lors de la mise à jour de l'utilisateur:", erreur);
    }
  };

  const handleLogout = () => {
    Cookies.remove('token');
    alert('Vous êtes déconnecté.');
};

  return (
    <main>
      <Container id="avis" justifyContent="center" paddingTop="100px">
          <div className={styles.form_wrapper}>
              <H2>Profil</H2>
              <form className={styles.form} onSubmit={handleSubmit}>
                <WrapperRow justifyContent="center" width="100%" gap="20px">
                  <Wrapper alignItems="center" width="70%" gap="20px">
                    <Wrapper width="100%" gap="10px">
                      <InputText type="text" name="name" value={user.name} onChange={handleChange} />
                    </Wrapper>
                    <Wrapper width="100%" gap="10px">
                      <InputText type="email" name="email" value={user.email} onChange={handleChange} />
                    </Wrapper>
                    <WrapperRow justifyContent="center" width="max-content" gap="10px">
                      <InputButton text="Valider"/>
                      <SecondaryBtn link="/Connexion" text="Se déconnecter" onClick={handleLogout}/>
                    </WrapperRow>
                  </Wrapper>  
                </WrapperRow>
              </form>  
          </div>
      </Container>
    </main>
  );
}

