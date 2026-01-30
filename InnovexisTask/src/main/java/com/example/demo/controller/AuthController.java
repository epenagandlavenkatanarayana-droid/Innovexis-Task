package com.example.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.repository.dto.AuthRequest;
import com.example.demo.repository.dto.AuthResponse;
import com.example.demo.repository.dto.RegisterRequest;
import com.example.demo.service.AuthService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    // ✅ REGISTER
    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(
            @Valid @RequestBody RegisterRequest request) {

        AuthResponse response = authService.register(request);
        return ResponseEntity.ok(response);
    }

    // ✅ LOGIN (ONLY ONE)
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(
            @Valid @RequestBody AuthRequest request) {

    	// 🔴 TEMP LOG (for testing FE → BE)
        System.out.println("LOGIN API HIT");
        
        AuthResponse response = authService.authenticate(request);
        return ResponseEntity.ok(response);
    }
}
