package com.keduit.board.controller;


import com.keduit.board.dto.MovieDTO;
import com.keduit.board.service.MainService;
import com.keduit.board.service.MovieService;
import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequiredArgsConstructor
public class RController {

    private final MainService mainService;
    private final MovieService movieService;
    @GetMapping("/movies-top20")
    @ResponseBody
    public ResponseEntity<List<MovieDTO>> showRecentMovies() {
        List<MovieDTO> recentMovies = movieService.findRecentMoviesWithDetails();
        return ResponseEntity.ok(recentMovies); // JSON 형식으로 데이터 반환
    }

}
