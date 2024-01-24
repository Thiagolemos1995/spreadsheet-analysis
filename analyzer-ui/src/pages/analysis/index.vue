<template>
  <div>
    <div class="mb-5">
      <h1 class="text-lg font-bold text-white">Analysis</h1>
    </div>
    <div class="flex flex-col items-start gap-12">
      <div
        class="bg-white flex flex-col h-96 w-full justify-between p-5 rounded-xl shadow-2xl"
      >
        <AnalysisFileTable />
      </div>
      <AnalysisUploadDialog />
    </div>
  </div>
</template>
