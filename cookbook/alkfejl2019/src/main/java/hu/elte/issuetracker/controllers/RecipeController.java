/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.issuetracker.controllers;

import hu.elte.issuetracker.entities.Recipe;
import hu.elte.issuetracker.entities.Label;
import hu.elte.issuetracker.entities.Message;
import hu.elte.issuetracker.repositories.RecipeRepository;
import hu.elte.issuetracker.repositories.LabelRepository;
import hu.elte.issuetracker.repositories.MessageRepository;
import hu.elte.issuetracker.security.AuthenticatedUser;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author KeresztiKrisztián
 */
@CrossOrigin
@RestController
@RequestMapping("/recipes")
public class RecipeController {

    @Autowired
    private RecipeRepository recipeRepository;

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private LabelRepository labelRepository;
    
    @Autowired 
    private AuthenticatedUser authenticatedUser;
    
    @GetMapping("")
    public ResponseEntity<Iterable<Recipe>> getAll() {
        return ResponseEntity.ok(recipeRepository.findAll());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Recipe> get(@PathVariable Integer id) {
        Optional<Recipe> recipe = recipeRepository.findById(id);
        if (recipe.isPresent()) {
            return ResponseEntity.ok(recipe.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("")
    public ResponseEntity<Recipe> post(@RequestBody Recipe recipe) {
        Recipe savedRecipe = recipeRepository.save(recipe);
        return ResponseEntity.ok(savedRecipe);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Recipe> put(@RequestBody Recipe recipe, @PathVariable Integer id) {
        Optional<Recipe> oRecipe = recipeRepository.findById(id);
        if (oRecipe.isPresent()) {
            recipe.setId(id);
            return ResponseEntity.ok(recipeRepository.save(recipe));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Integer id) {
        Optional<Recipe> oRecipe = recipeRepository.findById(id);
        if (oRecipe.isPresent()) {
            recipeRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}/messages")
    public ResponseEntity<Iterable<Message>> messages(@PathVariable Integer id) {
        Optional<Recipe> oRecipe = recipeRepository.findById(id);
        if (oRecipe.isPresent()) {
            return ResponseEntity.ok(oRecipe.get().getMessages());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/{id}/messages")
    public ResponseEntity<Message> insertMessage(@PathVariable Integer id, @RequestBody Message message) {
        Optional<Recipe> oRecipe = recipeRepository.findById(id);
        if (oRecipe.isPresent()) {
            Recipe recipe = oRecipe.get();
            message.setRecipe(recipe);
            return ResponseEntity.ok(messageRepository.save(message));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}/labels")
    public ResponseEntity<Iterable<Label>> labels(@PathVariable Integer id) {
        Optional<Recipe> oRecipe = recipeRepository.findById(id);
        if (oRecipe.isPresent()) {
            return ResponseEntity.ok(oRecipe.get().getLabels());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/{id}/labels")
    public ResponseEntity<Label> insertLabel(@PathVariable Integer id, @RequestBody Label label) {
        Optional<Recipe> oRecipe = recipeRepository.findById(id);
        if (oRecipe.isPresent()) {
            Recipe recipe = oRecipe.get();
            Label newLabel = labelRepository.save(label);
            recipe.getLabels().add(newLabel);
            recipeRepository.save(recipe);  // have to trigger from the @JoinTable side
            return ResponseEntity.ok(newLabel);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}/labels")
    public ResponseEntity<Iterable<Label>> modifyLabels(@PathVariable Integer id, @RequestBody List<Label> labels) {
        Optional<Recipe> oRecipe = recipeRepository.findById(id);
        if (oRecipe.isPresent()) {
            Recipe recipe = oRecipe.get();

            // if we would like to add new labels as well
            for (Label label: labels) {
                if (label.getId() == null) {
                    labelRepository.save(label);
                }
            }

            recipe.setLabels(labels);
            recipeRepository.save(recipe);
            return ResponseEntity.ok(labels);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
