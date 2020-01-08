package com.techelevator.model.dao;

import com.techelevator.model.EmployerApplications;
import com.techelevator.model.RankingDisplay;
import com.techelevator.model.RankingSubmit;
import com.techelevator.model.UserProfileImg;

public interface RankingDao {

    public RankingSubmit saveRanking(RankingSubmit rankingSubmit);

    public RankingDisplay getRankingByUserName(String userName);

    public EmployerApplications getEmployerApplicationsWithRankingByEmployerId(Long employerId);
    
    public RankingDisplay getRankingByStudentId(Long studentId);
    
}
