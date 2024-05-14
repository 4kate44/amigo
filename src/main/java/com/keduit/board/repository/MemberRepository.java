package com.keduit.board.repository;

import com.keduit.board.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;



@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
   Member findByEmail(String email);

    //비밀번호 변경
   @Modifying
    @Query(value = "UPDATE member SET password = :newPassword WHERE email = :email", nativeQuery = true)
    void updatePasswordByEmail(@Param("email") String email, @Param("newPassword") String newPassword);
}


