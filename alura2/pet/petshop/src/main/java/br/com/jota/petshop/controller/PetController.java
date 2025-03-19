package br.com.jota.petshop.controller;

import br.com.jota.petshop.entities.Pet;
import br.com.jota.petshop.services.PetService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/pets")
public class PetController {

    private final PetService petService;

    public PetController(PetService petService) {
        this.petService = petService;
    }

    @GetMapping()
    public ResponseEntity<List<Pet>> listaPet() {
        return ResponseEntity.ok().body(petService.listaPet());
    }

    @GetMapping("/{nome}")
    public ResponseEntity<Pet> buscarPorNome(@PathVariable String nome) {
        return petService.buscarPorNome(nome)
                .map(pet -> ResponseEntity.ok().body(pet))
                .orElse(ResponseEntity.notFound().build());
    }
}
