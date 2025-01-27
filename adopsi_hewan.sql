-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 27, 2025 at 01:31 PM
-- Server version: 11.4.2-MariaDB-log
-- PHP Version: 8.3.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `adopsi_hewan`
--

-- --------------------------------------------------------

--
-- Table structure for table `adopts`
--

CREATE TABLE `adopts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `pet_id` bigint(20) UNSIGNED NOT NULL,
  `status` enum('Pending','Approved','Rejected') NOT NULL DEFAULT 'Pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `adopts`
--

INSERT INTO `adopts` (`id`, `user_id`, `pet_id`, `status`, `created_at`, `updated_at`) VALUES
(1, 4, 7, 'Approved', '2025-01-27 04:17:52', '2025-01-27 04:20:49');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('admin@pawfect.id|127.0.0.1', 'i:1;', 1737976782),
('admin@pawfect.id|127.0.0.1:timer', 'i:1737976782;', 1737976782);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_01_24_131714_create_pets_table', 1),
(5, '2025_01_24_132659_create_adopts_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pets`
--

CREATE TABLE `pets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `category` enum('Cat','Dog') NOT NULL,
  `breed` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `gender` enum('Male','Female') DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `weight` decimal(5,2) DEFAULT NULL,
  `height` decimal(5,2) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pets`
--

INSERT INTO `pets` (`id`, `name`, `category`, `breed`, `age`, `gender`, `color`, `weight`, `height`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Wendell', 'Cat', 'Siamese', 7, 'Male', 'Orange', 34.75, 33.64, 'Reprehenderit reiciendis explicabo eligendi explicabo dicta quis.', '2025-01-26 21:53:35', '2025-01-26 21:53:35'),
(2, 'Kristian', 'Dog', 'Siamese', 11, 'Female', 'LightSalmon', 22.38, 76.72, 'Unde rerum laudantium ut animi quia unde et.', '2025-01-26 21:53:35', '2025-01-26 21:53:35'),
(3, 'Unique', 'Cat', 'Bulldog', 4, 'Male', 'DimGray', 19.58, 63.00, 'Ab et numquam ex.', '2025-01-26 21:53:35', '2025-01-26 21:53:35'),
(4, 'Reva', 'Dog', 'Siamese', 13, 'Female', 'Chartreuse', 12.56, 43.33, 'Et culpa autem eius.', '2025-01-26 21:53:35', '2025-01-26 21:53:35'),
(5, 'Dawn', 'Dog', 'Bulldog', 1, 'Female', 'Purple', 4.24, 68.57, 'Et deleniti quis aut.', '2025-01-26 21:53:35', '2025-01-26 21:53:35'),
(6, 'Ryley', 'Cat', 'Bulldog', 7, 'Male', 'LemonChiffon', 49.02, 87.15, 'Aliquid et ut tempore consequatur exercitationem.', '2025-01-26 21:53:35', '2025-01-26 21:53:35'),
(7, 'Dedric', 'Dog', 'Siamese', 10, 'Male', 'Linen', 22.24, 42.07, 'Voluptatibus aut quia distinctio molestiae unde laudantium provident.', '2025-01-26 21:53:35', '2025-01-26 21:53:35'),
(8, 'Marisa', 'Cat', 'Bulldog', 15, 'Female', 'Olive', 29.38, 83.35, 'Non temporibus expedita molestias tenetur illum.', '2025-01-26 21:53:35', '2025-01-26 21:53:35'),
(9, 'Osborne', 'Dog', 'Golden Retriever', 12, 'Female', 'Magenta', 48.46, 17.24, 'Rerum fugit omnis culpa sit atque assumenda ullam.', '2025-01-26 21:53:35', '2025-01-26 21:53:35'),
(10, 'Wanda', 'Cat', 'Siamese', 6, 'Female', 'Pink', 5.12, 70.94, 'Nisi hic exercitationem velit culpa natus error.', '2025-01-26 21:53:35', '2025-01-26 21:53:35'),
(11, 'Zelda', 'Dog', 'Siamese', 2, 'Female', 'GoldenRod', 22.25, 26.91, 'Dolor quo ad nam et expedita ex cumque.', '2025-01-26 21:53:35', '2025-01-26 21:53:35'),
(12, 'Tod', 'Dog', 'Siamese', 6, 'Male', 'Red', 21.10, 90.41, 'Nihil a non mollitia quos voluptate natus.', '2025-01-26 21:53:35', '2025-01-26 21:53:35'),
(13, 'Vilma', 'Dog', 'Golden Retriever', 8, 'Female', 'WhiteSmoke', 31.45, 95.83, 'Consequatur dolorem a sunt sint est quisquam.', '2025-01-26 21:53:35', '2025-01-26 21:53:35'),
(14, 'Eugenia', 'Dog', 'Siamese', 3, 'Female', 'DarkSeaGreen', 47.47, 35.21, 'Nemo amet animi qui repudiandae officiis soluta.', '2025-01-26 21:53:35', '2025-01-26 21:53:35'),
(15, 'Rhianna', 'Dog', 'Bulldog', 11, 'Female', 'DeepPink', 18.40, 53.45, 'Modi aliquid qui debitis quia eius illo eos.', '2025-01-26 21:53:35', '2025-01-26 21:53:35'),
(16, 'Lance', 'Dog', 'Siamese', 4, 'Male', 'MistyRose', 46.41, 22.38, 'Similique aspernatur quaerat similique temporibus commodi consequatur illum.', '2025-01-26 21:53:35', '2025-01-26 21:53:35'),
(17, 'Kathlyn', 'Dog', 'Persian', 6, 'Male', 'Tomato', 36.00, 51.16, 'Qui ut voluptates qui laudantium dicta facere placeat.', '2025-01-26 21:53:35', '2025-01-26 21:53:35'),
(18, 'Breana', 'Cat', 'Persian', 4, 'Male', 'Orchid', 22.42, 83.81, 'Nihil consequatur dolorem sit.', '2025-01-26 21:53:35', '2025-01-26 21:53:35'),
(19, 'Wendy', 'Dog', 'Bulldog', 8, 'Female', 'Black', 20.66, 85.43, 'Quos amet sapiente suscipit nam.', '2025-01-26 21:53:35', '2025-01-26 21:53:35'),
(20, 'Lexus', 'Cat', 'Persian', 5, 'Female', 'CornflowerBlue', 33.83, 88.32, 'Quia repudiandae nihil harum culpa inventore ut nostrum.', '2025-01-26 21:53:35', '2025-01-26 21:53:35');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('5Xz6rN6VTGZD39Ki62FOLo8WgEhHAH9ZCAqUtM6S', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36 Edg/132.0.0.0', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoib2FkZFBSbG9ZSENXcEVnSXFXVXROMVd2OWdyZTBxandmSG5vTlBnWCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTtzOjk6Il9wcmV2aW91cyI7YToxOntzOjM6InVybCI7czozMToiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2Rhc2hib2FyZCI7fX0=', 1737976886),
('EFNiJ2D44ApV5iotuvamFWA5VK5pv66Vwv9AxZRF', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36 Edg/132.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidnh0MnUweFBuek5BY1FScGVYYnVtVnZHN2p3bUQ5bG03d2RTcFZRZiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjc6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9sb2dpbiI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1737980631),
('x3HstkzbR5FpOGuIlYvGZoAkJ5XtKYqTwakRoKqZ', 3, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36 Edg/132.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibzlramMyNVJ6OVhvaWd0eE04R2xLSHpKZjR0dm0xbVpDT2VQVlRNVyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6Mzt9', 1737958551),
('x4duVOyIa3M9bdXg6h77hYx8ANv39SOfaciK9okN', 4, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiZ3F6eXZ4Tk9tV29rTWZYa0MyenNmRUZWZVlGMUJnYWNnSjhObkNrTiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjc6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9sb2dpbiI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjQ7fQ==', 1737977296),
('Y4LLy5qZWFxRCMCOFDFUqiDVEk4nexpXdcyJbABA', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36 Edg/132.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiazRoVXVONlRjM1ZCUmZoUGx5S1JiVkFxbG9zTFVvcHExd3p0bnZXWSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjc6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9sb2dpbiI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1737970177);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `role` enum('Admin','Adopter') NOT NULL DEFAULT 'Adopter',
  `email` varchar(255) NOT NULL,
  `address` text DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `role`, `email`, `address`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'Admin', 'admin@pawfecthome.id', '8493 Okuneva Trail\nEmmettmouth, LA 45208-3059', '2025-01-26 21:53:34', '$2y$12$EVG8lGxVLsUm4ubKSne.FOEF/0mnhSnRnbgTnzEq8bS91zHKxWNhC', NULL, '2025-01-26 21:53:34', '2025-01-26 21:53:34'),
(2, 'Makenzie Reilly', 'Adopter', 'makenzie.reilly@pawfecthome.id', '57389 Ima Ramp Apt. 205\nNew Malachi, VA 85235', '2025-01-26 21:53:34', '$2y$12$38LBSTDFts5bQcbjCWP5FeImdcFq.rHkSn340IJbAjaFsAJIS6UVq', NULL, '2025-01-26 21:53:35', '2025-01-26 21:53:35'),
(3, 'Tom Hermann', 'Adopter', 'tom.hermann@pawfecthome.id', '2416 Abshire Harbor Apt. 557\nOnastad, NY 29394-9904', '2025-01-26 21:53:35', '$2y$12$YytmHfz1PqG8FSzkofjptO9rs3QqMtqUceNMYuSktSyD00RBxHOvG', NULL, '2025-01-26 21:53:35', '2025-01-26 21:53:35'),
(4, 'Faisal', 'Adopter', 'faisal@gmail.com', 'jl.warudoyong', NULL, '$2y$12$iEcwov/9mS7ILS6hBTAdKuyBHX51D4hwB/6p80uDK7HOobqOjBrpG', NULL, '2025-01-27 04:17:30', '2025-01-27 04:17:30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adopts`
--
ALTER TABLE `adopts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `adopts_user_id_foreign` (`user_id`),
  ADD KEY `adopts_pet_id_foreign` (`pet_id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `pets`
--
ALTER TABLE `pets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adopts`
--
ALTER TABLE `adopts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `pets`
--
ALTER TABLE `pets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `adopts`
--
ALTER TABLE `adopts`
  ADD CONSTRAINT `adopts_pet_id_foreign` FOREIGN KEY (`pet_id`) REFERENCES `pets` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `adopts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
