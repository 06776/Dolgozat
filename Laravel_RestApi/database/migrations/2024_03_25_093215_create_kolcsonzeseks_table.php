<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('kolcsonzeseks', function (Blueprint $table) {
            $table->id();
            $table->integer('kolcsonzokId');
            $table->string('iro');
            $table->string('mufaj');
            $table->string('cim');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('kolcsonzeseks');
    }
};
