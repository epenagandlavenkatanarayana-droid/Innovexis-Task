package com.example.demo.repository.dto;



import java.math.BigDecimal;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ProductDTO {
    @NotBlank
    private String name;
    
    @NotBlank
    private String description;
    
    @Min(0)
    private BigDecimal price;
}
