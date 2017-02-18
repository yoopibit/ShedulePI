Інструкція.
Я буду юзати git bash

1. Скачати git bash, якщо хочуте юзати цей мануал (можна і юзати із графічним інтерфейсом, але кому він потрібен:) )

2. Зробити fork на свій акаунт: https://github.com/yoopibit/ShedulePI

3. Клонуєм репозиторій (вибираєм підходящу папку в яку буде викачано ShedulePI, YOUR-USERNAME -> ваш git login):
	git clone https://github.com/YOUR-USERNAME/ShedulePI.git

4. Мувамось у папку із репозиторієм:
	cd ShedulePI/

5. Додаєм шлях до центрального репозиторію:
	git remote add upstream https://github.com/TeamDevelopmentPI32/ShedulePI.git

	Після цього можна подивить чи він додався:
	 ----------------------------------------------------------------------------------------
	 - Набираєм (такий результат в мене)													-
	 -	git remote -v																		-
	 -		origin  https://github.com/yoopibit/ShedulePI.git (fetch)						-
	 -		origin  https://github.com/yoopibit/ShedulePI.git (push)						-
	 -		upstream        https://github.com/TeamDevelopmentPI32/ShedulePI.git (fetch)	-
	 -		upstream        https://github.com/TeamDevelopmentPI32/ShedulePI.git (push)		-
	 ----------------------------------------------------------------------------------------

6. Витягуєм всю інформацію із віддаленого репозиторію: 
	git fetch upstream
   Після цього вся інформація яка є у TeamDevelopmentPI32/ShedulePI.git (центральний репозиторій)
   є доступна локально як upstream. 
   Наприклад:
    -----------------------------------------------------------------
    - git fetch upstream											-
	-	From https://github.com/TeamDevelopmentPI32/ShedulePI		-
 	-	* [new branch]      development -> upstream/development 	-
 	-	* [new branch]      master      -> upstream/master 			-
 	-----------------------------------------------------------------

 	Тепер доступ до вітки development з центрального репозиторію відбувається через
 		upstream/development
 	а до master:
 		upstream/master

 
 ---------------------------------------------------------------------------------------------------


