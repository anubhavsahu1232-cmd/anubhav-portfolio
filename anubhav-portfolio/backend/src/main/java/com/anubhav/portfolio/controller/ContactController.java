package com.anubhav.portfolio.controller;

import com.anubhav.portfolio.dto.ContactRequest;
import com.anubhav.portfolio.entity.Contact;
import com.anubhav.portfolio.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    private final ContactService service;

    public ContactController(ContactService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody ContactRequest request) {
        Contact saved = service.save(request);
        return ResponseEntity.ok(Map.of(
                "message", "Message received successfully",
                "id", saved.getId()
        ));
    }
}
