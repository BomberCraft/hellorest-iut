package com.ninja_squad.hellorest.model;

public class ToDoTask {

    private TaskPriority priority;
    private String label;

    public ToDoTask() {
    }

    public ToDoTask(String label) {
        this.label = label;
    }

    public TaskPriority getPriority() {
        return priority;
    }

    public void setPriority(TaskPriority priority) {
        this.priority = priority;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

}
