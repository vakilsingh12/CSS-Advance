insert into tm_ts_status(emp_id,project_id,ts_year,ts_month,ts_week,cal_week,
    sun_date,sun_project_status,sun_status,sun_status_date,
    mon_date,mon_project_status,mon_status,mon_status_date,
    tue_date,tue_project_status,tue_status,tue_status_date,
    wed_date,wed_project_status,wed_status,wed_status_date,
    thu_date,thu_project_status,thu_status,thu_status_date,
    fri_date,fri_project_status,fri_status,fri_status_date,
    sat_date,sat_project_status,sat_status,sat_status_date,
    week_status,created_by,modified_by,is_active,created
    )values(584,392,2021,5,5,21,
    "2021-05-23","no_entry","no_entry","2021-05-23 18:19:35",
    "2021-05-24","no_entry","no_entry", "2021-05-24 18:19:30",
    "2021-05-25","no_entry","no_entry", "2021-05-25 18:19:31",
    "2021-05-25","no_entry","no_entry", "2021-05-26 18:19:32",
    "2021-05-27","no_entry","no_entry", "2021-05-27 18:19:20",
    "2021-05-28","no_entry","no_entry", "2021-05-28 18:19:21",
    "2021-05-29","no_entry","no_entry","2021-05-29 18:18:35",
    "no_entry",584,584,1,"2021-05-29 22:48:22");



    insert into tm_emp_timesheets(emp_id,project_task_id,project_id,ts_year,ts_month,ts_week,cal_week,sun_date,sun_duration,mon_date,mon_duration,
        tue_date,tue_duration,wed_date,wed_duration,thu_date,thu_duration,fri_date,fri_duration,sat_date,sat_duration,week_duration,created_by,modified_by,is_active,created
        )values(584,2530,392,2021,5,5,21,"2021-05-23","00:00","2021-05-24","00:00",
        "2021-05-25","00:00","2021-05-26","00:00","2021-05-27","00:00","2021-05-28","00:00","2021-05-29",
        "00:00","00:00",584,584,1,"2021-05-25 20:00:40");
        
delete from tm_emp_timesheets where emp_id=584 and 
cal_week=21 and project_task_id=2530;