package com.example.adoreact.controller;
import com.example.adoreact.model.Produto;
import com.example.adoreact.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produtos")
@CrossOrigin(origins = "http://localhost:3000")  // Ajuste o endereço conforme seu front-end
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @GetMapping
    public List<Produto> listarProdutos() {
        return produtoService.listarProdutos();
    }

    @PostMapping
    public Produto salvarProduto(@RequestBody Produto produto) {
        return produtoService.salvarProduto(produto);
    }

    @GetMapping("/{id}")
    public Produto buscarProduto(@PathVariable String id) {
        return produtoService.buscarProdutoPorId(id);
    }

    @DeleteMapping("/{id}")
    public void deletarProduto(@PathVariable String id) {
        produtoService.deletarProduto(id);
    }
}
