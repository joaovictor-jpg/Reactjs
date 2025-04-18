package br.com.jota.petshop.services;

import br.com.jota.petshop.entities.Pet;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PetService {
    private final List<Pet> pets = new ArrayList<>();

    public PetService() {
        String[] nomesPets = {
                "Afegão Hound", "Affenpinscher", "Airedale Terrier", "Akita", "American Staffordshire Terrier",
                "Basenji", "Basset Hound", "Beagle", "Beagle Harrier", "Bearded Collie", "Bedlington Terrier",
                "Bichon Frisé", "Bloodhound", "Bobtail", "Boiadeiro Australiano", "Boiadeiro Bernês", "Border Collie",
                "Border Terrier", "Borzoi", "Boston Terrier", "Boxer", "Buldogue Francês", "Buldogue Inglês",
                "Bull Terrier", "Bulmastife", "Cairn Terrier", "Cane Corso", "Cão de Água Português", "Cão de Crista Chinês",
                "Cavalier King Charles Spaniel", "Chesapeake Bay Retriever", "Chihuahua", "Chow Chow", "Cocker Spaniel Americano",
                "Cocker Spaniel Inglês", "Collie", "Coton de Tuléar", "Dachshund", "Dálmata", "Dandie Dinmont Terrier",
                "Dobermann", "Dogo Argentino", "Dogue Alemão", "Fila Brasileiro", "Fox Terrier (Pelo Duro e Pelo Liso)",
                "Foxhound Inglês", "Galgo Escocês", "Galgo Irlandês", "Golden Retriever", "Grande Boiadeiro Suiço", "Greyhound",
                "Grifo da Bélgica", "Husky Siberiano", "Jack Russell Terrier", "King Charles", "Komondor", "Labradoodle",
                "Labrador Retriever", "Lakeland Terrier", "Leonberger", "Lhasa Apso", "Lulu da Pomerânia", "Malamute do Alasca",
                "Maltês", "Mastife", "Mastim Napolitano", "Mastim Tibetano", "Norfolk Terrier", "Norwich Terrier", "Papillon",
                "Pastor Alemão", "Pastor Australiano", "Pinscher Miniatura", "Poodle", "Pug", "Rottweiler", "Sem Raça Definida (SRD)",
                "ShihTzu", "Silky Terrier", "Skye Terrier", "Staffordshire Bull Terrier", "Terra Nova", "Terrier Escocês", "Tosa",
                "Weimaraner", "Welsh Corgi (Cardigan)", "Welsh Corgi (Pembroke)", "West Highland White Terrier", "Whippet",
                "Xoloitzcuintli", "Yorkshire Terrier"
        };

        for (String nome : nomesPets) {
            pets.add(new Pet(nome));
        }
    }


    public List<Pet> listaPet() {
        return pets;
    }

    public Optional<Pet> buscarPorNome(String nome) {
        return pets.stream()
                .filter(pet -> pet.getNome().equals(nome))
                .findFirst();
    }
}
