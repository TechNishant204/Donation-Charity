package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.model.Feedback;

public interface FeedbackService {

    Feedback addFeedback(Feedback feedback,Long userId);
    List<Feedback> getAllFeedback();
    List<Feedback> getAllFeedbackByUserId(Long userId);
    Feedback editFeedback(Long feedbackId,Feedback updatedFeedback);
    Feedback deleteFeedback(Long feedbackId);

}
