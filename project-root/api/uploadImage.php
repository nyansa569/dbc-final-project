<?php
// function handleImageUpload($inputName = 'image') {
//     if (!isset($_FILES[$inputName]) || $_FILES[$inputName]['error'] !== UPLOAD_ERR_OK) {
//         return null;
//     }

//     $targetDir = __DIR__ . '/../uploads/';
//     if (!file_exists($targetDir)) {
//         mkdir($targetDir, 0755, true);
//     }

//     $fileExt = pathinfo($_FILES[$inputName]['name'], PATHINFO_EXTENSION);
//     $fileName = uniqid('img_') . '.' . $fileExt;
//     $targetFile = $targetDir . $fileName;

//     if (!move_uploaded_file($_FILES[$inputName]['tmp_name'], $targetFile)) {
//         return null;
//     }

//     return 'uploads/' . $fileName;
// }


// /api/uploadImage.php
// function handleImageUpload($inputName = 'image') {
//     if (!isset($_FILES[$inputName])) return null;

//     $uploadDir = __DIR__ . '/../uploads/';
//     if (!file_exists($uploadDir)) mkdir($uploadDir, 0777, true);

//     $filename = uniqid() . '_' . basename($_FILES[$inputName]['name']);
//     $filePath = $uploadDir . $filename;
//     $imageUrl = '/uploads/' . $filename;

//     if (move_uploaded_file($_FILES[$inputName]['tmp_name'], $filePath)) {
//         return $imageUrl;
//     }

//     return null;
// }


// function handleFileUpload($fieldName, $targetDir = 'uploads/documents') {
//     if (!isset($_FILES[$fieldName]) || $_FILES[$fieldName]['error'] !== UPLOAD_ERR_OK) {
//         return null;
//     }

//     $allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
//     $fileType = mime_content_type($_FILES[$fieldName]['tmp_name']);

//     if (!in_array($fileType, $allowedTypes)) {
//         return null; // Or return an error if you want
//     }

//     $uploadDir = __DIR__ . "/../public/{$targetDir}/";
//     if (!is_dir($uploadDir)) {
//         mkdir($uploadDir, 0755, true);
//     }

//     $filename = uniqid() . '_' . basename($_FILES[$fieldName]['name']);
//     $targetPath = $uploadDir . $filename;

//     if (move_uploaded_file($_FILES[$fieldName]['tmp_name'], $targetPath)) {
//         return "{$targetDir}/{$filename}";
//     }

//     return null;
// }


function handleImageUpload($inputName = 'image', $targetDir = 'uploads/') {
    if (!isset($_FILES[$inputName]) || $_FILES[$inputName]['error'] !== UPLOAD_ERR_OK) {
        return null;
    }

    // Make sure the upload path is inside /public
    $uploadDir = __DIR__ . '/../public/' . $targetDir;
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    $filename = uniqid() . '_' . basename($_FILES[$inputName]['name']);
    $filePath = $uploadDir . $filename;
    $relativePath = $targetDir . $filename;

    if (move_uploaded_file($_FILES[$inputName]['tmp_name'], $filePath)) {
        return $relativePath; // e.g., "uploads/image_xyz.jpg"
    }

    return null;
}

function handleFileUpload($fieldName = 'file', $targetDir = 'uploads/documents/') {
    if (!isset($_FILES[$fieldName]) || $_FILES[$fieldName]['error'] !== UPLOAD_ERR_OK) {
        return null;
    }

    $allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    $fileType = mime_content_type($_FILES[$fieldName]['tmp_name']);
    if (!in_array($fileType, $allowedTypes)) {
        return null; // Optional: return ['error' => 'Invalid file type'];
    }

    // Upload directory relative to public/
    $uploadDir = __DIR__ . '/../public/' . $targetDir;
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    $filename = uniqid() . '_' . basename($_FILES[$fieldName]['name']);
    $filePath = $uploadDir . $filename;
    $relativePath = $targetDir . $filename;

    if (move_uploaded_file($_FILES[$fieldName]['tmp_name'], $filePath)) {
        return $relativePath;
    }

    return null;
}
