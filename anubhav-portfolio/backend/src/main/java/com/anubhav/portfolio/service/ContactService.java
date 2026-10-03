package com.anubhav.portfolio.service;

import com.anubhav.portfolio.dto.ContactRequest;
import com.anubhav.portfolio.entity.Contact;
import com.anubhav.portfolio.repository.ContactRepository;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    private final ContactRepository repository;

    public ContactService(ContactRepository repository) {
        this.repository = repository;
    }

    public Contact save(ContactRequest request) {
        Contact contact = new Contact();
        contact.setName(request.getName());
        contact.setEmail(request.getEmail());
        contact.setMessage(request.getMessage());
        return repository.save(contact);
    }
}
