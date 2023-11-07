//package com.poscodx.emaillist.controller;
//
//import org.apache.commons.logging.Log;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.poscodx.emaillist.dto.JsonResult;
//import com.poscodx.emaillist.repository.EmaillistRepository;
//import com.poscodx.emaillist.vo.EmaillistVo;
//
//import lombok.extern.slf4j.Slf4j;
//
//@RestController
//public class ApiController {
//	@Autowired
//	private EmaillistRepository emaillistRepository;
//	@GetMapping("/api")
//	public ResponseEntity<JsonResult> read(@RequestParam(value="kw",required=true, defaultValue="")) {
////		Log.info("Request[GET/ api]");
//		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(emaillistRepository.findAll()));
//	}
//	
//	@PostMapping("/api")
//	public ResponseEntity<JsonResult> read(@RequestBody EmaillistVo emaillistVo) {
//		System.out.println(emaillistVo.getFirstName());
//		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(emaillistRepository.add(emaillistVo)));
//	}
//}